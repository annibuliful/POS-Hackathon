import { Application } from '../declarations';
import users from './users/users.service';
import customers from './customers/customers.service';
import products from './products/products.service';
import orders from './orders/orders.service';
import orderDetails from './order-details/order-details.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application) {
  app.configure(users);
  app.configure(customers);
  app.configure(products);
  app.configure(orders);
  app.configure(orderDetails);
}
