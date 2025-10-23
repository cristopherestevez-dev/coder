import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import productos from "../data/productos.json";
import { getProductById } from "../data/firebase";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const data = await getProductById(itemId);
        setItem(data);
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      } finally {
        setLoading(false);
      }
    };

    if (itemId) fetchItem();
  }, [itemId]);

  if (loading) return <p className="text-gray-500">Cargando detalles...</p>;
  if (!item) return <p className="text-red-500">Producto no encontrado.</p>;

  return (
    <div className="p-4">
      {item ? (
        <ItemDetail {...item} />
      ) : (
        <p className="text-gray-500">Cargando detalles...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
