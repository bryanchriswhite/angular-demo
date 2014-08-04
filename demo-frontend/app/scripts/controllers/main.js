'use strict';

/**
 * @ngdoc function
 * @name TruecoinDemoApp.controllers#controller:mainController
 * @description
 * # mainController
 * Controller of the TruecoinDemoApp
 */
angular.module('TruecoinDemoApp.controllers')
  .controller('mainController',
  function($scope, productService) {
    $scope.primitives = {};
    
    productService.getList()
      .success(function(data) {
        $scope.products = data;
      })
      .error(function(reason) {
        console.error('Couldn\'t get products!: ', reason)
      });

    $scope.addProduct = function($event) {
      $scope.addFormPosition = angular.element('#add-btn').position();
      $scope.newProduct = productService.new();
      $scope.primitives.addFormOpen = true;
    }
  }
)
;
