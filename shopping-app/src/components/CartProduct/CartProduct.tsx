import { useState } from "react";
import "./CartProduct.css";
import { CartProduct as ICartProduct } from "../../types";

export interface CartProductProps {
    item: ICartProduct,
    onClick: (product: ICartProduct) => void;
}

export function CartProduct({item, onClick}: CartProductProps) {
    return (
        <div className="cart-product">
            <img className="cart-product-img" src={item.image} />
            <div className="cart-product-info">
                <div className="cart-product-name">{item.name}</div>
                <div className="cart-product-count">{item.count}</div>
            </div>
            <button className="product-btn" onClick={() => onClick(item)}>
                X
            </button>
        </div>
    );

}