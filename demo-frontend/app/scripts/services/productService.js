angular.module('TruecoinDemoApp.services')
  .service('productService',
  function(Restangular, backendUrl, overPromise) {
    //-- django requires a trailing `/`
    Restangular.setRequestSuffix('/');

    Restangular.extendCollection('products', function(collection) {
      collection.add = function(productData) {
        var product = Restangular.restangularizeElement(this.parentResource, productData, 'products');
        this.push(product);
      };

      return collection;
    });

    var _products
      , productsResource = Restangular.allUrl('products', backendUrl + '/products')
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
      return overPromise(productsResource.getList().then(function(products) {
        angular.forEach(products, function(product) {
          overPromiseElement(product);
        });

        _products = products;
        return _products;
      }))
    };

    this.newProduct = function() {
      return {
        name           : '',
        description    : '',
        inventory_count: '',
        url            : backendUrl + '/products/',
      }
    };

    this.create = function(productData) {
      _products.add(productData);
      return overPromise(_products[_products.length - 1].post())
        .success(function() {
          return _products;
        })
    };

    this.copy = function(element) {
      var elementCopy = Restangular.copy(element);
      overPromiseElement(elementCopy);
      return elementCopy;
    }
  }
);