import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import  dotenv  from 'dotenv';
import routerProductos from './src/routes/productos.routes.js';
import routerCliente from './src/routes/clientes.routes.js';
import { verificacionToken } from './src/utils/auth.js';


dotenv.config();
const app = express();
const puerto = process.env.PORT || 3000;

// Configuraciones del servidor
app.use(cors());
// app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/auth', routerCliente)
app.use('/api/producto',verificacionToken, routerProductos)


// Middleware de status(404)
app.use((req,res,next)=>{
    res.status(404).send('<h1>Esta ruta no existe.</h1>')
});

app.listen(puerto,()=>{
    console.log(`Servidor corriendo en puerto ${puerto}`)
})