import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProductsLayout } from "./ProductsLayout";

beforeEach(() => {
  let product = {
    id: 1,
    image: "",
    name: "Pencil",
    description: "Used to write",
  }

  //render(<Product product={product} onClick={console.log}/>);
});

describe("Products Layout", () => {
  it("renders the product image", () => {
    true;
  });
});