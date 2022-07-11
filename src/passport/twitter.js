import passport from "passport";
import { Strategy } from 'passport-twitter'; 
import dotenv from 'dotenv';
import User from '../dataBase/schema/users';

const twitterStrategy = Strategy;

passport.use(new twitterStrategy({
    consumerKey:`${process.env.twitter_consumerKey}`,
    consumerSecret:`${process.env.twitter_secretKey}`,
    callbackURL:'http://localhost:8080/login/auth2/twitter'
},async function(token,tokenSecret,profile,done){
    const user = User.findOne({twitterId:profile.id});
    if(user){
        return done(null,user)
    }else{
        const newUser = new User();
        newUser.twitterId = profile.id;
        newUser.nombre = profile.displayName;
        await newUser.save();
        done(null,newUser);
    }
}
)); 

passport.serializeUser((user,done) => {
    done(null,user.id); 
})

passport.deserializeUser(async(id,done) => {
    const user = await User.findById(id);
    done(null,user);
}); 