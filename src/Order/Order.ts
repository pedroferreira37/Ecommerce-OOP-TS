import { ShoppingCart } from "../cart/ShoppingCart";

export class Order {
  public client: string;
  private cart: ShoppingCart;
  private status: string = "Open";

  constructor(client: string, cart: ShoppingCart) {
    this.client = client;
    this.cart = cart;
  }

  setStatus(value: string): void {
    this.status = value;
  }

  getStatus(): string {
    return this.status;
  }

  showOrder(): void {
    this.cart.displayProducts();
    this.cart.getTotal();
  }

  GetOrderOtotal(): number {
    return this.cart.getTotal();
  }



  getName(): string {
    return this.client;
  }


}