import type { Product as IProduct } from "../types";
import "./Product.css";

export interface ProductProps {
  product: IProduct;
  onClick: (product: IProduct) => void;
}

export function Product({ product, onClick }: ProductProps) {
  const { name, description } = product;
  return (
    <div className="Product">
      <span>{name}</span>
      <span>{description}</span>
      <button onClick={() => onClick(product)}>Add to cart</button>
    </div>
  );
}
