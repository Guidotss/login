import { Router } from "express";
import path from 'path'; 
import passport from 'passport';

const router  = Router(); 

router.get('/', (req,res) =>{
    res.sendFile(path.resolve('src/public/views','registro.html')); 
}); 
router.get('/errorRegistro', (req,res) =>{
    res.sendFile(path.resolve('src/public/views/errors','errorRegistro.html')); 
})

router.post('/',passport.authenticate('registro',{
    successRedirect:'/login',
    failureRedirect:'/registro/errorRegistro'
})); 

export default router;