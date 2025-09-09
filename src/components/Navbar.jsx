import React from "react";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "70px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#4771c7ff",
        color: "white",
        zIndex: 1000,
        padding: "0 2rem",
      }}
    >
      <div style={{ flex: "1", display: "flex", alignItems: "center" }}>
        <h1 style={{ margin: 0 }}>logo</h1>
      </div>

      <div
        style={{
          flex: "2",
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        <a href="#" style={{ color: "white", textDecoration: "none" }}>
          Inicio
        </a>
        <a href="#" style={{ color: "white", textDecoration: "none" }}>
          Productos
        </a>
        <a href="#" style={{ color: "white", textDecoration: "none" }}>
          Contacto
        </a>
      </div>

      <div
        style={{
          flex: "1",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          paddingRight: "3rem",
            cursor: "pointer",
        }}
      >
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;
