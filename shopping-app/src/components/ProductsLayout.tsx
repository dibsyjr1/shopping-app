import React, { ChangeEvent, useState, useReducer } from "react";
import type { Product as IProduct } from "../types";
import { Product } from ".";
import "./ProductsLayout.css";

export interface ProductsLayoutProps {
  products: IProduct[] | undefined;
  onProductClick: (product: IProduct) => void;
}

interface Inputs {
  name: string;
  description: string;
}

export function ProductsLayout({
  products,
  onProductClick,
}: ProductsLayoutProps) {
  const reducer = (state: Inputs, event: ChangeEvent<HTMLInputElement>) => ({
    ...state,
    [event.target.name]: event.target.value,
  });

  const [inputs, onChange] = useReducer(reducer, { name: "", description: "" });

  function filterBy(key: keyof Inputs) {
    return (product: IProduct) => {
      if (inputs[key] === "") return true;

      const productValue = product[key].toUpperCase();
      const inputValue = inputs[key].toUpperCase();

      return productValue.includes(inputValue);
    };
  }

  return (
    <div className="Products-layout">
      {!products ? (
        <div>LOADING...</div>
      ) : (
        <>
          <input
            placeholder="Name"
            name="name"
            value={inputs.name}
            onChange={onChange}
          />
          <input
            placeholder="Description"
            name="description"
            value={inputs.description}
            onChange={onChange}
          />
          {products
            .filter(filterBy("name"))
            .filter(filterBy("description"))
            .map((product) => (
              <Product
                key={product.id}
                product={product}
                onClick={console.log}
              />
            ))}
        </>
      )}
    </div>
  );
}
