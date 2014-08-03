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
;
