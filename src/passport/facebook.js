import passport from "passport";
import { Strategy } from "passport-facebook";
import dotenv from "dotenv";
import Users from "../dataBase/schema/users";
dotenv.config();

const facebookStrategy = Strategy; 

passport.use(new facebookStrategy({
    clientID:`${process.env.facebook_clientID}`,
    clientSecret:`${process.env.facebook_clientSecret}`,
    callbackURL:'http://localhost:8080/login/auth1/facebook',
},async function(accessToken,refreshToken,profile,done){
    const user = await Users.findOne({facebookId:profile.id});
    if(user){
        return done(null,user); 
    }else{
        const newUser = new Users(); 
        newUser.facebookId = profile.id;
        newUser.nombre = profile.displayName;
        await newUser.save();

        done(null,newUser);
    }
}
)); 

passport.serializeUser((user,done) => {
    done(null,user.id); 
}); 

passport.deserializeUser(async(id,done) => {
    const user = await Users.findById(id);
    done(null,user);
})