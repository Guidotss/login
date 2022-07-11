import { Router } from "express";
import path from 'path'; 
import { isAuth } from "../middlewares/auth";


const router  = Router(); 

router.get('/',isAuth,(req,res) => {
    return res.sendFile(path.resolve('src/public/views','index.html'));
})

router.get('/logOut', (req,res) => {
    req.session.destroy(); 
    res.redirect('/login')
}); 
export default router;