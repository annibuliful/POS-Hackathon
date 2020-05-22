// Initializes the `order-details` service on path `/order-details`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { OrderDetails } from './order-details.class';
import createModel from '../../models/order-details.model';
import hooks from './order-details.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'order-details': OrderDetails & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/order-details', new OrderDetails(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('order-details');

  service.hooks(hooks);
}
