import { Router } from "express";
import path from 'path'
import passport from 'passport';
import { isAuth } from "../middlewares/isAuth";

const router = Router(); 


router.get('/',(req,res) => {
    return res.sendFile(path.resolve('src/public/views','login.html'))
})

router.post('/',passport.authenticate('login',{
    successRedirect:'/',
    failureRedirect:'/errorLogin'
}))



export default router; 