import { Order } from "../Order/Order";
import { ITPaymentProcessor } from "./ITPayment";
export class DebitPayment implements ITPaymentProcessor {
  pay(order: Order): void {
    order.showOrder();
    console.log(
      `Pedido feito no nome de ${this.order.getClientName()} no Débito no valor de R$${this.order.GetOrderOtotal()},00`
    );
    order.setStatus("Processando");
    console.log(`Status: ${order.getStatus()} aguarde...`);
    order.setStatus("Status: Pagamento realizado!");
    console.log(`${order.getStatus()}!`);
  }
}

export class CreditPayment implements ITPaymentProcessor {
  pay(order: Order): void {
    console.log("Pagamento feito no crédito");
  }
}
