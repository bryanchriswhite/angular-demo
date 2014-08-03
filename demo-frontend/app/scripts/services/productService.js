angular.module('TruecoinDemoApp.services')
  .service('productService',
  function(Restangular, backendUrl, overPromise) {
    //-- django requires a trailing `/`
    Restangular.setRequestSuffix('/');

    var productsResource = Restangular.allUrl('products', backendUrl + '/products');
    this.getList = function() {
      return overPromise(productsResource.getList())
    }
  }
);