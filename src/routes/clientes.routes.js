import { Router } from "express";

const router = Router();


router.post('/login',(req, res)=>{
    const cliente = req.body;
    res.status(200).json(`Login de cliente: ${cliente.nombre}`)
});


export default router;