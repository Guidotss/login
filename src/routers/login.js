import { Router } from "express";
import path from 'path'
import passport, { session } from 'passport';
import Users from "../dataBase/schema/users";


const router = Router(); 


router.get('/',(req,res) => {
    return res.sendFile(path.resolve('src/public/views','login.html'))
}); 
router.get('/user',async(req,res) => {
    const session = req.session; 
    const user = await Users.findById({_id:session.passport.user});
    res.json({nombre:user.nombre,email:user.email});
})

router.get('/errorLogin',(req,res) =>{
    res.sendFile(path.resolve('src/public/views/errors','errorLogin.html'))
})

router.get('/auth1',passport.authenticate('facebook')); 

router.get('/auth1/facebook',passport.authenticate('facebook',{
    failureRedirect:'/login/errorLogin',
    successRedirect:'http://localhost:8080'
})); 

router.post('/',passport.authenticate('login',{
    successRedirect:'http://localhost:8080',
    failureRedirect:'/login/errorLogin'
})); 

router.get('/auth2',passport.authenticate('twitter')); 

router.get('/auth2/twitter',passport.authenticate('twitter',{
    failureRedirect:'/login/errorLogin',
    successRedirect:'http://localhost:8080'
})); 


export default router; 