import { Router } from "express";
import path from 'path'; 
import { Users  } from "../classes/userClass";

const router  = Router(); 

router.get('/', (req,res) =>{
    res.sendFile(path.resolve('src/public/views','registro.html')); 
}); 
router.get('/errorRegistro', (req,res) =>{
    res.sendFile(path.resolve('src/public/views/errors','errorRegistro.html')); 
})

router.post('/', (req,res) =>{
    return res.redirect('/registro/errorRegistro')
})





export default router;