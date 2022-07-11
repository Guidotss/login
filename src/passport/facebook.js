import passport from "passport";
import { Strategy } from "passport-facebook";
import dotenv from "dotenv";
import Users from "../dataBase/schemas/users";
dotenv.config();

const facebookStrategy = Strategy; 

passport.use(new facebookStrategy({
    clientID:`${process.env.facebook_clientID}`,
    clientSecret:`${process.env.facebook_clientSecret}`,
    callbackURL:'http://localhost:8080/facebook'
})); 