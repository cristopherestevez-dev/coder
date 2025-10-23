import { createContext, useState } from "react";

const cartContext = createContext("default value");

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addItem(newItem) {
    const quantity = 1;
    const newCart = structuredClone(cartItems);
    const isInCart = cartItems.some((item) => item.id === newItem.id);

    if (isInCart) {
      const index = cartItems.findIndex((item) => item.id === newItem.id);
      newCart[index].count += quantity;
    } else {
      newItem.count = quantity;
      newCart.push(newItem);
    }

    setCartItems(newCart);
  }

  function countCartItems() {
    let counter = 0;
    cartItems.forEach((item) => (counter += item.count));

    return counter;
  }
  function removeItem(id) {
    const newCart = structuredClone(cartItems);
    const index = newCart.findIndex((item) => item.id === id);

    if (index !== -1) {
      if (newCart[index].count > 1) {
        newCart[index].count -= 1;
      } else {
        newCart.splice(index, 1);
      }
      setCartItems(newCart);
    }
  }
  function clearCart() {
    setCartItems([]);
  }
  function checkout() {
    if (cartItems.length === 0) {
      alert("El carrito está vacío. Agregá productos antes de pagar.");
      return;
    }

    const totalCompra = cartItems.reduce(
      (total, item) => total + item.price * item.count,
      0
    );

    const resumen = cartItems
      .map(
        (item) =>
          `${item.name} x${item.count} - $${(item.price * item.count).toFixed(
            2
          )}`
      )
      .join("\n");

    const confirmCheckout = window.confirm(
      `Resumen de compra:\n\n${resumen}\n\nTotal a pagar: $${totalCompra.toFixed(
        2
      )}\n\n¿Querés proceder al pago?`
    );

    if (confirmCheckout) {
      alert("¡Compra realizada con éxito! Gracias por tu pedido.");
      clearCart();
    }
  }

  return (
    <cartContext.Provider
      value={{
        cartItems,
        addItem,
        countCartItems,
        removeItem,
        clearCart,
        checkout,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
export { cartContext };
