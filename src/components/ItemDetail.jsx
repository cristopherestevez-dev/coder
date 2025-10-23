import { useContext, useEffect, useState } from "react";
import { cartContext } from "../context/cartContext";
import { getProductById } from "../data/firebase";

const ItemDetail = ({ id }) => {
  const { addItem } = useContext(cartContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("ID recibido:", id);
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (loading) return <p className="text-center mt-8">Cargando producto...</p>;
  if (!product)
    return <p className="text-center mt-8">Producto no encontrado.</p>;
  const { title, description, price } = product;
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-2xl p-6">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <p className="text-lg font-semibold text-green-600">$ {price}</p>
      <button
        onClick={() => addItem(product)}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemDetail;
