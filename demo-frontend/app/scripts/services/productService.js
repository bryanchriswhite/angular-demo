angular.module('TruecoinDemoApp.services')
  .service('productService',
  function(Restangular, backendUrl, overPromise) {
    //-- django requires a trailing `/`
    Restangular.setRequestSuffix('/');

    var productsResource = Restangular.allUrl('products', backendUrl + '/products')
      , overPromiseElement = function(element) {
        var aliasedSave = element.save;
        element.save = function() {
          return overPromise(aliasedSave())
        }
      }
      ;

    //-- Provide `.success()` and `.error()` on Restangular collection elements.
    //  Delegate to Restangular collecton's `getList()`
    this.getList = function() {
      return overPromise(productsResource.getList().then(function(collection) {
        angular.forEach(collection, function(element) {
          overPromiseElement(element);
        });

        return collection;
      }))
    };

    this.copy = function(element) {
      var elementCopy = Restangular.copy(element);
      overPromiseElement(elementCopy);
      return elementCopy;
    }
  }
);