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
  const productsData = [
    {
      title: "Jabra Elite 8 Active",
      description:
        "Best and Most Advanced Sports Wireless Bluetooth Earbuds with Comfortable Secure Fit",
      image:
        "https://m.media-amazon.com/images/I/512x-48508L._AC_UY327_FMwebp_QL65_.jpg",
    },
    {
      title: "JBL Tune Flex",
      description: "True Wireless Noise Cancelling Earbuds (Black), Small",
      image:
        "https://m.media-amazon.com/images/I/61joErBxERL._AC_UY327_FMwebp_QL65_.jpg",
    },
    {
      title: "Sony WH-1000XM5",
      description:
        "The Best Wireless Noise Canceling Headphones with Auto Noise Canceling Optimizer",
      image:
        "https://m.media-amazon.com/images/I/61vJtKbAssL._AC_UY327_FMwebp_QL65_.jpg",
    },
    {
      title: "JBL Quantum 910",
      description: "Wireless Gaming Headset, Black, Large",
      image:
        "https://m.media-amazon.com/images/I/51JCUUfvo4L._AC_UY327_FMwebp_QL65_.jpg",
    },
  ];

  return (
    <div className="products-container">
      {productsData.map((product, idx) => (
        <Product key={idx} {...product} />
      ))}
    </div>
  );
}
