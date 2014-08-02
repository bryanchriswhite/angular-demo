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
beforeEach(function() {
  module('TruecoinDemoAppTest.controllers');
});

describe('Controller: mainController', function() {

  var mainController
    , scope
    , productService
    ;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope, _productService_) {
    productService = _productService_;
    scope = $rootScope.$new();
    mainController = $controller('mainController', {
      $scope        : scope,
//      productService: _productService_
    });
  }));

  it('should attach products to the scope', function() {
    scope.products.should.eql(productService.private.products);
  });
});
