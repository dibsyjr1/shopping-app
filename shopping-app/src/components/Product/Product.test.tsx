import React from 'react';
import { render, screen } from '@testing-library/react';
import { Product } from "../";

beforeEach(() => {
  let product = {
    id: 1,
    image: "",
    name: "Pencil",
    description: "Used to write",
  }

  render(<Product product={product} onClick={console.log}/>);
});

describe("Product", () => {
  it("renders the product image", () => {
    true;
  });
});