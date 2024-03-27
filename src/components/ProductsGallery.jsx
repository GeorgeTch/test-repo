import productsData from "./productsData";

function Product({ title, description, image }) {
  return (
    <div className="product">
      <div className="product-img-container">
        <img src={image} alt={title} />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default function ProductsGallery() {
  return (
    <div className="products-container">
      {productsData.map((product, idx) => (
        <Product key={idx} {...product} />
      ))}
    </div>
  );
}
