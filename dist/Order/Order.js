"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
class Order {
    constructor(client, cart) {
        this.status = "Open";
        this.client = client;
        this.cart = cart;
    }
    setStatus(value) {
        this.status = value;
    }
    getStatus() {
        return this.status;
    }
    showOrder() {
        this.cart.displayProducts();
        this.cart.getTotal();
    }
    GetOrderOtotal() {
        return this.cart.getTotal();
    }
    getName() {
        return this.client;
    }
}
exports.Order = Order;
//# sourceMappingURL=Order.js.map