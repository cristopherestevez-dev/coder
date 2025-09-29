const ItemDetail = ({ id, title, description, price }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-2xl p-6">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <p className="text-lg font-semibold text-green-600">$ {price}</p>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemDetail;
