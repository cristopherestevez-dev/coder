import React, { createContext, useState } from "react";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CartWidget from "./components/CartWidget";
import { CartProvider } from "./context/cartContext";
import CartView from "./components/CartView";



function App() {
 



  return (
    <CartProvider >
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <ItemListContainer greeting="¡Bienvenidos a nuestra tienda!" />
          }
        />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CartView />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
