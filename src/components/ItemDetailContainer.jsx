import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import productos from "../data/productos.json";

const ItemDetailContainer = () => {
  const { itemId } = useParams(); 
  const [item, setItem] = useState(null);

  useEffect(() => {
    const getItem = new Promise((resolve) => {
      setTimeout(() => {
        const foundItem = productos.find((el) => el.id === Number(itemId));
        resolve(foundItem);
      }, 500);
    });

    getItem.then((res) => setItem(res));
  }, [itemId]);

  return (
    <div className="p-4">
      {item ? <ItemDetail {...item} /> : <p className="text-gray-500">Cargando detalles...</p>}
    </div>
  );
};

export default ItemDetailContainer;

