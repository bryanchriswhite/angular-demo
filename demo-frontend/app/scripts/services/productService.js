angular.module('TruecoinDemoApp.services')
  .service('productService',
  function(Restangular) {
    this.products = [
      {
        name           : 'Product 1',
        description    : 'This is a description of product 1',
        inventory_count: '15',
      },
      {
        name           : 'Product 2',
        description    : 'This is a description of product 2',
        inventory_count: '10',
      },
      {
        name           : 'Product 3',
        description    : 'This is a description of product 3',
        inventory_count: '7',
      },
    ];
  }
);