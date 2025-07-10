import { mostrar_productos, productoPor_Id, crear_producto, eliminar_Producto } from "../services/productos.services.js";

export const allProducts = async (req, res) => {
  try {
    const productos = await mostrar_productos();
    console.log("esto devuelve en controllers: ", productos);
    if (productos.length > 0) {
      return res.status(200).json(productos);
    } else {
      return res.status(200).json("No hay productos registrados.");
    }
  } catch (error) {
    return res.status(500).json("Error en el servidor.");
  }
};

export const crearProducto = async(req, res) => {
  const { categoria, nombre, precio, descripcion, stock } = req.body;
  const producto = {
    categoria,
    nombre,
    precio,
    descripcion,
    stock,
  };

  try {
    if (
      categoria &&
      nombre &&
      precio &&
      precio > 0 &&
      descripcion &&
      stock &&
      stock > 0
    ) {
      console.log('En controlador el producto es: ',producto);
      const nuevoProducto = await crear_producto(producto);
      res
        .status(201)
        .json({
          message: "Se creo producto con exito",
          payload: nuevoProducto,
        });
    } else {
      res.status(200).json({ message: "No se creo el producto por falta de datos o datos incorrectos." });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "problemas en el servidor (controlador)." });
  }
};

export const productoPorId = async(req, res) => {
  const { id } = req.params;
  const producto = await productoPor_Id(id);
  console.log(producto);
  if (producto) {
    res
      .status(200)
      .json({ message: "Producto con id encontrado", payload: producto });
    return producto;
  } else {
    res.status(200).json({ message: "No hay producto con ese ID." });
  }
};

export const eliminarProducto = async(req, res) => {
  const {id} = req.params;

  // console.log('producto a eliminar: ',productoAEliminar);
  const productoAEliminar = await eliminar_Producto(id);
  if (productoAEliminar) {
    res
      .status(200)
      .json({
        message: `El producto con id: ${id} fue eliminado.`,
        payload: productoAEliminar,
      });
  } else {
    res.status(200).json({ message: "No se encontro el producto" });
  }
};
