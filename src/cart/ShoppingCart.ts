import { Product } from "./Product"
import { CartEntry } from "./CartEntry"
export class ShoppingCart {
  entries: Map<string, CartEntry>

  constructor() {
    this.entries = new Map()
  }

  add(productName: string, price: number): void {
    const isStored: boolean = this.entries.has(productName);
    if (isStored) {
      const productEntry: CartEntry | undefined = this.entries.get(productName);
      productEntry?.add();
      return
    }

    const product: Product = new Product(price);
    const entry: CartEntry = new CartEntry(product, 1)
    this.entries.set(productName, entry);
  }

  displayProducts(): void {
    this.entries.forEach((key, name) => {
      console.log(`${name}  ${key.getProduct().getPrice()},00  ${key.getQuantity()}`)
    })
  }

  getTotal(): number {
    let cartTotal: number = 0;
    this.entries.forEach((key, name) => {
      cartTotal += (key.getProduct().getPrice() * key.getQuantity());
    })
    return cartTotal;
  }



}