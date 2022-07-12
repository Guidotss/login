import passport from "passport";
import { Strategy } from 'passport-github2'; 
import dotenv from 'dotenv';
import User from '../dataBase/schema/users'; 
dotenv.config();

const githubStrategy = Strategy; 

passport.use(new githubStrategy({
    clientID:`${process.env.github_clientID}`,
    clientSecret:`${process.env.github_secretID}`,
    callbackURL:'http://localhost:8080/login/auth3/github',
},
async function(accessToken,refreshToken,profile,done){
    const user = await User.findOne({githubId:profile.id});
    if(user){
        done(null,user);
    }else{
        const newUser = new User(); 
        newUser.githubId = profile.id;
        newUser.nombre = profile.username;
        await newUser.save();
        done(null,newUser);
    }
}
)); 

passport.serializeUser((user,done) => {
    done(null,user.id); 
}); 

passport.deserializeUser(async(id,done) => {
    const user = await User.findById(id);
    done(null,user);
}); 