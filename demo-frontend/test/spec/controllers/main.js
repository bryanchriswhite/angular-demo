'use strict';

describe('Controller: MainCtrl', function() {

  // load the controller's module
  beforeEach(function() {
    module('TruecoinDemoAppTest');
    module(function($provide) {
      $provide.service('_productService', function() {
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
      })
    })
  });

  var MainCtrl
    , scope
    , productService
    ;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope, _productService) {
    productService = _productService;
    scope = $rootScope.$new();
    MainCtrl = $controller('mainController', {
      $scope: scope
    });
  }));

  it('should attach products to the scope', function() {
    expect(scope.products).toBe(products);
  });
});
