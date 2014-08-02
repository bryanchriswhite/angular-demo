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
    $scope.products = productService.products;
  }
);
