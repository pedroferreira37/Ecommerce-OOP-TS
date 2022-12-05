"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCart = void 0;
const Product_1 = require("./Product");
const CartEntry_1 = require("./CartEntry");
class ShoppingCart {
    constructor() {
        this.entries = new Map();
    }
    add(productName, price) {
        const isStored = this.entries.has(productName);
        if (isStored) {
            const productEntry = this.entries.get(productName);
            productEntry === null || productEntry === void 0 ? void 0 : productEntry.add();
            return;
        }
        const product = new Product_1.Product(price);
        const entry = new CartEntry_1.CartEntry(product, 1);
        this.entries.set(productName, entry);
    }
    displayProducts() {
        this.entries.forEach((key, name) => {
            console.log(`${name}  ${key.getProduct().getPrice()},00  ${key.getQuantity()}`);
        });
    }
    getTotal() {
        let cartTotal = 0;
        this.entries.forEach((key, name) => {
            cartTotal += (key.getProduct().getPrice() * key.getQuantity());
        });
        return cartTotal;
    }
}
exports.ShoppingCart = ShoppingCart;
//# sourceMappingURL=ShoppingCart.js.map