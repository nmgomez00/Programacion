export const ProductCard = ({ producto }) => {
  return (
    <div className="product">
      <img src={producto.img} alt="producto" />
      <div>
        <h2>{producto.nombre}</h2>
        <p>Precio: {producto.precio}</p>
        <p>{producto.descripcion}</p>
        <button>Agregar al carrito</button>
      </div>
    </div>
  );
};
