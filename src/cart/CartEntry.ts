import { Product } from "./Product"
export class CartEntry {
  private product: Product;
  private quantity: number;

  constructor(product: Product, quantity: number) {
    this.product = product;
    this.quantity = quantity;
  }

  getProduct(): Product {
    return this.product;
  }

  getQuantity(): number {
    return this.quantity;
  }

  add(): void {
    this.quantity++
  }

  remove(): void {
    if (this.quantity > 0) this.quantity--
  }

}