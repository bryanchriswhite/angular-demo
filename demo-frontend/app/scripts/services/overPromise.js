angular.module('TruecoinDemoApp.services')
  .value('overPromise', overPromise);

function overPromise(promise) {
  promise.success = function(callback) {
    return overPromise(promise.then(callback));
  };

  promise.error = function(errback) {
    return overPromise(promise.then(null, errback))
  };
  
  return promise;
}