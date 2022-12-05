import { ShoppingCart } from "./cart/ShoppingCart";
import { Order } from "./Order/Order";
import { DebitPayment } from "./payment/PaymentProcessor";

const cart = new ShoppingCart();

cart.add("Celular", 2000)
cart.add("Notebook", 5000)



const order = new Order("Pedro", cart);
const processor = new DebitPayment()

processor.pay(order)

