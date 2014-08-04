angular.module('restangular', [])
  .service('Restangular', function() {
    this.setRequestSuffix = angular.noop;
    this.extendCollection = angular.noop;
    this.allUrl = function() {
      return {
        getList: function() {
          return {
            then: function() {
              
            }
          }
        }
      }
    }
  })
;