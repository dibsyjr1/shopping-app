import { Product } from "./";

export interface CartProduct extends Product {
  count: number
}