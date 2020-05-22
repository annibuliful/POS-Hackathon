import { Service, KnexServiceOptions } from 'feathers-knex';
import { Application } from '../../declarations';

export class OrderDetails extends Service {
  constructor(options: Partial<KnexServiceOptions>, app: Application) {
    super({
      ...options,
      name: 'order_details'
    });
  }
}
