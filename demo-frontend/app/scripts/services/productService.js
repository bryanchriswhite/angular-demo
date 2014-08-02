angular.module('TruecoinDemoApp.services')
  .service('productService',
  function(Restangular, backendUrl, overPromise) {
    var productsResource = Restangular.allUrl('products', backendUrl + '/products');
    this.getList = function() {
      return overPromise(productsResource.getList())
    }
  }
);