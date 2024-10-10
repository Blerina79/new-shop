
import type { ProductInterface } from "./product.interface";

export interface ProductCartInterface extends ProductInterface {
  quantity: number;
}