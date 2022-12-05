"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartEntry = void 0;
class CartEntry {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }
    getProduct() {
        return this.product;
    }
    getQuantity() {
        return this.quantity;
    }
    add() {
        this.quantity++;
    }
    remove() {
        if (this.quantity > 0)
            this.quantity--;
    }
}
exports.CartEntry = CartEntry;
//# sourceMappingURL=CartEntry.js.map