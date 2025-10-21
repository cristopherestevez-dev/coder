import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

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
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Inicio
        </Link>
        <Link
          to="/category/Notebooks"
          style={{ color: "white", textDecoration: "none" }}
        >
          Notebooks
        </Link>
        <Link
          to="/category/Smartphones"
          style={{ color: "white", textDecoration: "none" }}
        >
          Smartphones
        </Link>
        <Link
          to="/category/Consolas"
          style={{ color: "white", textDecoration: "none" }}
        >
          Consolas
        </Link>
        <Link
          to="/category/Accesorios"
          style={{ color: "white", textDecoration: "none" }}
        >
          Accesorios
        </Link>
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
        <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
          <div style={{ cursor: "pointer" }}>
            <CartWidget />
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
