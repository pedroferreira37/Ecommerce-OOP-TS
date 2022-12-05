import { IProduct } from "./IProduct";
import { Product } from "./Product";
interface Cart {
  add(name: string, price: number): void;
  remove(): void;
}

export class ShoppingCart implements Cart {
  private cart: Map<string, IProduct>;

  constructor() {
    this.cart = new Map<string, IProduct>();
  }

  add(name: string, price: number): void {
    const product: IProduct = new Product(price);
    this.cart.set(name, product);
  }
}
