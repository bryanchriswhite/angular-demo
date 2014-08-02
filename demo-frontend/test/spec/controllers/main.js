'use strict';

/*
 | -- DEMONSTRATION OF UNIT TESTING IN ANGULAR
 |   I usually don't test controller logic becasue I feel
 |   that anything complex enough that should require testing
 |   doesn't belong in the controller; however, testing controllers
 |   scopes does lend itself nicely to BDD'ing any services
 |   that the controllers depend on, in this case, `productService`.
 |   
 |   This is just an example of how one might go about setting
 |   up a unit test with angular and mocks.
 */
describe('Controller: mainController', function() {
  beforeEach(function() {
    module('TruecoinDemoAppTest.controllers');
    module(function($provide) {
      $provide.service('productService', function() {
        var _private = {
          products: [
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
          ]
        };

        this.getList = function() {
          return {
            success: function(callback) {
              callback(_private);

              return {
                error: function() {

                }
              }
            }
          }
        };

        this.private = _private
      });
    })
  });

  var mainController
    , scope
    , productService
    ;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope, _productService_) {
    productService = _productService_;
    scope = $rootScope.$new();
    mainController = $controller('mainController', {
      $scope: scope,
    });
  }));

  it('should attach products to the scope', function() {
    scope.products.should.eql(productService.private.products);
  });
});
