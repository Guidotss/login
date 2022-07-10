import { Router } from "express";
import path from 'path'; 
import { Users  } from "../classes/userClass";

const router  = Router(); 

router.get('/', (req,res) => {
    return res.sendFile(path.resolve('src/public/views','index.html'));
})

export default router;