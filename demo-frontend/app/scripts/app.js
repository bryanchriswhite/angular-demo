'use strict';

/**
 * @ngdoc overview
 * @name truecoinDemoApp
 * @description
 * # truecoinDemoApp
 *
 * Main module of the application.
 */
angular.module('TruecoinDemoApp', [
  'TruecoinDemoApp.controllers',
  'TruecoinDemoApp.services',
  'TruecoinDemoApp.directives',
  'ngCookies',
  'ngSanitize',
  'restangular',
])
  .config(function(RestangularProvider) {
    RestangularProvider.setRestangularFields({
      selfLink: 'url'
    });
  })
  .run(function($templateCache) {
    //-- Putting some templates in the template cache because it's simpler than doing transclude, etc. properly
    // TODO: configure grunt to do this and use an .html file instead
    // TODO: use ngTransclude and transclude the directives so you can just use `templateUrl` in the directive
    $templateCache.put('product-form', '<div class="product-form fade out"><div class="input-group">\
        <span class="input-group-addon" ng-click="closeForm()"><span class="glyphicon glyphicon-remove"></span></span>\
        <input class="form-control" type="text" ng-model="productCopy.name"/>\
        <input class="form-control" type="text" ng-model="productCopy.description"/>\
        <input class="form-control" type="text" ng-model="productCopy.inventory_count" pattern="\\d+"/>\
        <span class="input-group-addon" ng-click="submit()"><span class="glyphicon glyphicon-ok"></span></span>\
        </div>\
        </div>');

    $templateCache.put('list-item', '<div class="list-item-buttons fade out btn-group">\
          <button ng-click="openForm()" class="btn btn-warning"><span class="glyphicon glyphicon-pencil"></span></button>\
          <button class="btn btn-danger"><span class="glyphicon glyphicon-remove"></span></button>\
        </div>')
  })
;
