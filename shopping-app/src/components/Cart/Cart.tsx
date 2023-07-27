import { CartProduct } from "../";
import { CartProduct as ICartProduct } from "../../types";
import "./Cart.css";

export interface CartProps {
    cartItems: ICartProduct[],
    removeProductFromCart: (product: ICartProduct) => void;
}

export function Cart({ cartItems, removeProductFromCart }: CartProps) {
    return (
        <div id="cart">
            <div id="cart-title">
                Cart
            </div>
            <div id="cart-products">
                {cartItems.map((item) => (
                    <CartProduct item={item} onClick={() => removeProductFromCart(item)}/>
                ))}
            </div>
        </div>
    );

}