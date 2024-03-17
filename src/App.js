import React from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import ProductsGallery from "./components/ProductsGallery";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Search />
      </div>
      <ProductsGallery />
      <Footer />
    </div>
  );
}

export default App;
