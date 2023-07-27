import React, { useEffect, useState } from "react";
import "./App.css";

import * as api from "./api";
import { Product as IProduct, CartProduct as ICartProduct } from "./types";
import { Cart, ProductsLayout } from "./components";

function App() {
  const [products, setProducts] = useState<IProduct[]>();
  const [cartItems, setCartItems] = useState<ICartProduct[]>([]);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    setTimeout(async () => {
      var products = await api.getProducts();
      setProducts(products);
    }, 2000);
  }

  function addProductToCart(product: IProduct) {
    if (!cartItems.filter((item) => item.id === product.id).length) {
      var newProduct = {
        ...product,
        count: 1
      } as ICartProduct;

      setCartItems([...cartItems, newProduct]);
    } else {
      cartItems.find((item) => {
        if (item.id === product.id) item.count++;
      });
      
      setCartItems([...cartItems]);
    }
  }

  function removeProductFromCart(product: ICartProduct) {
    if (cartItems.filter((item) => item.id === product.id && item.count == 1).length) {
      setCartItems([...cartItems.filter((item) => item.id !== product.id)]);
    } else {
      cartItems.find((item) => {
        if (item.id === product.id) item.count--;
      });
      
      setCartItems([...cartItems]);
    }
  }

  return (
    <div className="App">
      <Cart 
        cartItems={cartItems} 
        removeProductFromCart={removeProductFromCart}
      />
      <div className="Products">
        <ProductsLayout
          products={products}
          addProductToCart={addProductToCart}
        ></ProductsLayout>
      </div>
    </div>
  );
}

export default App;
