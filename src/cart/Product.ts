import { IProduct } from "./IProduct";

export class Product implements IProduct {
  private _price: number;

  constructor(price: number) {
    this._price = price;
  }

  getPrice(): number {
    return this.price;
  }
}
