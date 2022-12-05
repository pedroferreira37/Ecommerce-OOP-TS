import { Order } from "../Order/Order";

export interface ITPaymentProcessor {
  pay(order: Order): void;
}