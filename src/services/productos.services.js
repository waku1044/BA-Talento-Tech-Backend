import { productColection } from "../models/productos.models.js";
import Producto from "../models/productos.models.js";
import { getDoc, getDocs,deleteDoc, addDoc, doc } from 'firebase/firestore';





export const crear_producto = async(producto) => {
  const nuevoProducto =  new Producto(
    producto.categoria,
    producto.nombre,
    producto.precio,
    producto.descripcion,
    producto.stock
    );
    
    addDoc(productColection,producto);
    return  nuevoProducto
    
  };

export const mostrar_productos = async () => {
  try {
    const querySnapshot = await getDocs(productColection);  // Obtiene los documentos de la colección
    const productos = [];
    querySnapshot.docs.map(doc => productos.push({ id: doc.id, ...doc.data() }));
      // Extrae los datos de los documentos
    return productos;
  } catch (error) {
    throw new Error('Error al obtener productos');
  }
};

export const productoPor_Id = async (id) => {
  
    const product = await getDoc(doc(productColection,id));
    if(product.exists()){
      return product.data() ;  
    }else{
      return null
    }
  };

export const eliminar_Producto = async(id) => {
  try {
    const productoEliminado = await productoPor_Id(id)
      await deleteDoc(doc(productColection,id));
    console.log('el producto eliminado en servi: ',productoEliminado)
    return productoEliminado
  } catch (error) {
    throw new Error('Error al eliminar el producto');
  }
    
    
  };