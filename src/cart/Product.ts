export class Product {
  private price: number;

  constructor(price: number) {
    this.price = price;
  }

  getPrice(): number {
    return this.price;
  }


}