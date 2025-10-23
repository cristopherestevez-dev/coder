import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productos from "../data/productos.json";
import Item from "./Item";
import { getProducts , getProductsByCategory } from "../data/firebase";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { categoryParam } = useParams();

  useEffect(() => {
    setLoading(true);
    setError(null);
    setItems([]);

    const fetchData = async () => {
      try {
        let products;
        if (categoryParam) {
          products = await getProductsByCategory(categoryParam);
        } else {
          products = await getProducts();
        }
        setItems(products);
      } catch (err) {
        console.error("Error al obtener productos:", err);
        setError("Hubo un error al cargar los productos");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [categoryParam]);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

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
