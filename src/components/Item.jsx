import { Link } from "react-router-dom";


const Item = ({ id, title, description, price, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <p className="price">$ {price}</p>
        <Link to={`/item/${id}`} className="btn">
          Ver Detalles
        </Link>
      </div>
    </div>
  );
};

export default Item;
