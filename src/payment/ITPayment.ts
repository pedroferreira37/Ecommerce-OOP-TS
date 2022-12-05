import { Order } from "../Order/Order";

export interface ITPaymentProcessor {
  pay(value: number): void;
}
