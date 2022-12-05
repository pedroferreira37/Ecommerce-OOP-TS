"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ShoppingCart_1 = require("./cart/ShoppingCart");
const Order_1 = require("./Order/Order");
const PaymentProcessor_1 = require("./payment/PaymentProcessor");
const cart = new ShoppingCart_1.ShoppingCart();
cart.add("Celular", 2000);
cart.add("Notebook", 5000);
const order = new Order_1.Order("Pedro", cart);
const processor = new PaymentProcessor_1.DebitPayment();
processor.pay(order);
//# sourceMappingURL=main.js.map