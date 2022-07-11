import { Router } from "express";
import path from 'path'
import passport from 'passport';


const router = Router(); 


router.get('/',(req,res) => {
    return res.sendFile(path.resolve('src/public/views','login.html'))
}); 

router.get('/auth1',passport.authenticate('facebook')); 

router.get('/auth1/facebook',passport.authenticate('facebook',{
    failureRedirect:'/login/errorLogin',
    successRedirect:'http://localhost:8080'
})); 

router.post('/',passport.authenticate('login',{
    successRedirect:'/',
    failureRedirect:'/errorLogin'
}))

router.get('/auth2',passport.authenticate('twitter')); 

router.get('/auth2/twitter',passport.authenticate('twitter',{
    failureRedirect:'/login/errorLogin',
    successRedirect:'http://localhost:8080'
})); 


export default router; 