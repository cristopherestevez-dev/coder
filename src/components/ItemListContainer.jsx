import React from "react";

const ItemListContainer = ({ props }) => {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>{props}</h2>
      <p>Próximamente verás aquí nuestro catálogo de productos</p>
    </div>
  );
};

export default ItemListContainer;