import type { Product } from "../../types";
import { products } from "../../data";

export async function getProducts() {
  return new Promise<Product[]>((resolve, reject) => {
    return resolve(products);
  });
}
