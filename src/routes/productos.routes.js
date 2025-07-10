import  Router  from "express";
import  { allProducts, productoPorId, crearProducto, eliminarProducto }  from '../controllers/productos.controllers.js'

const router = Router();

router.get("/", allProducts);

router.get("/:id", productoPorId);

router.post('/crear',crearProducto);

router.delete('/:id', eliminarProducto)

export default router;
