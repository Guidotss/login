import passport from "passport";
import {Strategy} from "passport-local";
import User from '../dataBase/schema/users';

const localStrategy = Strategy;

passport.use('registro',new localStrategy({
    usernameField: 'email',
    passwordField:'password',
    passReqToCallback:true
},async function(req,email,password,done){
    const user = await User.findOne({email});
    if(user){
        return done(null,false); 
    }else{
        const newUser = new User(); 
        newUser.nombre = req.body.nombre;
        newUser.email = email;
        newUser.password = password;
        await newUser.save();
        done(null,newUser); 
    
    }
}))

passport.use('login',new localStrategy({
    usernameField: 'email',
    passwordField:'password',
    passReqToCallback:true
},async function(nombre,email,password,done){
    const user = await User.findOne({email});
    if(!user || user.password !== password){
        return done(null,false);
    }else{
        done(null,user);
    }
})); 

passport.serializeUser((user,done) => {
    done(null,user.id); 
}); 

passport.deserializeUser(async(id,done) => {
    const user =  await User.findById(id);
    done(null,user); 
}); 