import { Router } from "express";
import path from 'path'

const router = Router(); 


router.get('/', (req,res) => {
    return res.sendFile(path.resolve('src/public/views','login.html'))
})


export default router; 