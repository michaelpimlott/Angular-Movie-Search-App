var app = angular.module('movieApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/:movieSearch', {
      templateUrl: 'partials/list.html',
      controller: 'MainCtrl'
    })
    .when('/:id/show', {
      templateUrl: 'partials/show.html',
      controler: 'ShowCtrl'
    })
});
