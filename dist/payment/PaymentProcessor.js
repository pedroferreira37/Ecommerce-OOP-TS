"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditPayment = exports.DebitPayment = void 0;
class DebitPayment {
    pay(order) {
        order.showOrder();
        console.log(`Pedido feito no nome de ${order.getName()} no Débito no valor de R$${order.GetOrderOtotal()},00`);
        order.setStatus("Processando");
        console.log(`Status: ${order.getStatus()} aguarde...`);
        order.setStatus("Status: Pagamento realizado!");
        console.log(`${order.getStatus()}!`);
    }
}
exports.DebitPayment = DebitPayment;
class CreditPayment {
    pay(order) {
        console.log("Pagamento feito no crédito");
    }
}
exports.CreditPayment = CreditPayment;
//# sourceMappingURL=PaymentProcessor.js.map