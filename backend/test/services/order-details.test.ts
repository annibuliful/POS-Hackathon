import app from '../../src/app';

describe('\'order-details\' service', () => {
  it('registered the service', () => {
    const service = app.service('order-details');
    expect(service).toBeTruthy();
  });
});
