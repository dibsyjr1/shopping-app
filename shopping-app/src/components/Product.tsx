import type { Product as IProduct } from "../types";
import "./Product.css";

export interface ProductProps {
  product: IProduct;
  onClick: (product: IProduct) => void;
}

export function Product({ product, onClick }: ProductProps) {
  const { name, image, description } = product;
  return (
    <div className="product-tile">
      <img className="product-img" src={image} />
      <div className="product-info">
        <div className="product-name">{name}</div>
        <div className="product-description">{description}</div>
        <button className="product-btn" onClick={() => onClick(product)}>
          Add to cart
        </button>
      </div>
    </div>
  );
}
