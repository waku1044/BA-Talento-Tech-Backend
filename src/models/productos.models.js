import db from '../config/data.js';
import { collection } from 'firebase/firestore';

export const productColection = collection(db,'productos')

class Producto{
    // static count = 0
    constructor(categoria, nombre,precio,descripcion,stock){
        // Producto.count++
        // this.id = Producto.count
        this.categoria = categoria
        this.nombre = nombre
        this.precio = precio
        this.descripcion = descripcion
        this.stock = stock
    }
    
    set ventaProducto(cantidad){
        this.stock -= cantidad;
    }
};


export default Producto ;