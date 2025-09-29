import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productos from "../data/productos.json";
import Item from "./Item";


const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const getItems = new Promise((resolve) => {
      setTimeout(() => {
        if (categoryId) {
          resolve(productos.filter((prod) => prod.category === categoryId));
        } else {
          resolve(productos);
        }
      }, 300);
    });

    getItems.then((res) => setItems(res));
  }, [categoryId]);

  return (
    <div className="items-container">
      {greeting && <h2>{greeting}</h2>}
      <div className="items-grid">
        {items.map((prod) => (
          <Item key={prod.id} {...prod} />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;

