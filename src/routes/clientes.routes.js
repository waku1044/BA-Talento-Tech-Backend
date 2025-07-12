import { Router } from "express";
import { login } from "../controllers/clientes.controllers.js";

const router = Router();


router.post('/login',login);


export default router;