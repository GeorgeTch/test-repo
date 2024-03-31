import { useState } from "react";
import productsData from "../components/productsData";
import Search from "../components/Search";
import ProductsGallery from "../components/ProductsGallery";
import "./Home.css";

function Home() {
  const [isSorted, setIsSorted] = useState(false);
  const [productsList, setProductsList] = useState(productsData);

  const handleSortClick = () => {
    setProductsList(
      isSorted
        ? productsData
        : productsList.slice().sort((a, b) => a.title.localeCompare(b.title))
    );
    setIsSorted(!isSorted);
  };

  const handleSearch = (value) => {
    const filteredProducts = productsData.filter((product) =>
      product.title.toLowerCase().includes(value.toLowerCase())
    );
    setProductsList(filteredProducts);
  };

  return (
    <>
      <Search onSort={handleSortClick} onSearch={handleSearch} />
      <ProductsGallery products={productsList} />
    </>
  );
}

export default Home;
