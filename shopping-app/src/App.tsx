import React, { useEffect, useState } from "react";
import "./App.css";

import * as api from "./api";
import type { Product } from "./types";
import { ProductsLayout } from "./components";

function App() {
  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    setTimeout(async () => {
      var products = await api.getProducts();
      setProducts(products);
    }, 2000);
  }

  function onProductClick(product: Product) {
    console.log(product);
  }

  return (
    <div className="App">
      <div className="Products">
        <ProductsLayout
          products={products}
          onProductClick={onProductClick}
        ></ProductsLayout>
      </div>
    </div>
  );
}

export default App;
