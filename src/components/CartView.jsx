import React, { useContext } from "react";
import { cartContext } from "../context/cartContext";

const CartView = () => {
  const { cartItems, removeItem, clearCart, checkout } =
    useContext(cartContext);

  const totalCompra = cartItems.reduce(
    (total, item) => total + item.price * item.count,
    0
  );
  const handleClearCart = () => {
    const confirmClear = window.confirm("Vas a eliminar todo de tu carrito");
    if (confirmClear) clearCart();
  };

  return (
    <div
      style={{
        marginTop: "100px",
        padding: "2rem",
        maxWidth: "800px",
        margin: "100px auto",
        backgroundColor: "#f9f9f9",
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h2>🛒 Tu Carrito</h2>

      {cartItems.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "1rem",
            }}
          >
            <thead>
              <tr style={{ borderBottom: "2px solid #ccc" }}>
                <th style={{ textAlign: "left", padding: "0.5rem" }}>
                  Producto
                </th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr
                  key={item.id}
                  style={{
                    borderBottom: "1px solid #ddd",
                    textAlign: "center",
                  }}
                >
                  <td style={{ textAlign: "left", padding: "0.5rem" }}>
                    {item.title}
                  </td>
                  <td>{item.count}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>${(item.price * item.count).toFixed(2)}</td>
                  <td>
                    <button
                      onClick={() => removeItem(item.id)}
                      style={{
                        backgroundColor: "#ff5c5c",
                        color: "white",
                        border: "none",
                        padding: "0.4rem 0.8rem",
                        borderRadius: "6px",
                        cursor: "pointer",
                      }}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3 style={{ textAlign: "right", marginTop: "1.5rem" }}>
            Total a pagar: ${totalCompra.toFixed(2)}
          </h3>

          <button
            onClick={handleClearCart}
            style={{
              backgroundColor: "#999",
              color: "white",
              border: "none",
              padding: "0.6rem 1rem",
              borderRadius: "6px",
              cursor: "pointer",
              margin:"10px"
            }}
          >
            Vaciar carrito
          </button>

          <button
            onClick={checkout}
            style={{
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              padding: "0.6rem 1rem",
              borderRadius: "6px",
              cursor: "pointer",
              margin:"10px"
            }}
          >
            Finalizar compra
          </button>
        </>
      )}
    </div>
  );
};

export default CartView;
