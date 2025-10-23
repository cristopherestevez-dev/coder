import { useState } from "react";

export default function FormCheckOut({ handleCheckout, handleClearCart }) {
    const [formData, setFormData] = useState({
      username: "",
      email: "",
      phone: "",
    });
  function handleSubmit(event) {

    event.preventDefault();
    console.log("formEnviado");
    handleCheckout(formData)
  }

  function handleInputChange(event) {
    const { value, name } = event.target;
    const newFormData = { ...formData };
    newFormData[name] = value;
    setFormData(newFormData);
  }

  function resetForm(){
    setFormData({
      username: "",
      email: "",
      phone: "",
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre
        <input value={formData.username} onChange={handleInputChange} type="text" name="username"></input>
      </label>
      <label>
        Email
        <input value={formData.email} onChange={handleInputChange} type="email" name="email"></input>
      </label>
      <label>
        Telefono
        <input value={formData.phone} onChange={handleInputChange} type="tel" name="phone"></input>
      </label>
      <button style={{
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              padding: "0.6rem 1rem",
              borderRadius: "6px",
              cursor: "pointer",
              margin:"10px"
            }} type="submit">Enviar</button>
      <button style={{
              backgroundColor: "#999",
              color: "white",
              border: "none",
              padding: "0.6rem 1rem",
              borderRadius: "6px",
              cursor: "pointer",
              margin:"10px"
            }} type="button" onClick={resetForm}> Limpiar form</button>
             <button
        style={{
          backgroundColor: "#ff5c5c",
          color: "white",
          border: "none",
          padding: "0.6rem 1rem",
          borderRadius: "6px",
          cursor: "pointer",
          margin: "10px",
        }}
        type="button"
        onClick={handleClearCart}
      >
        Vaciar Carrito
      </button>
    </form>
  );
}
