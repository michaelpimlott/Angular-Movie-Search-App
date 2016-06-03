var app = angular.module('movieApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/:movieSearch', {
      templateUrl: 'partials/list.html',
      controller: 'MainController'
    })
    .when('/:id/show', {
      templateUrl: 'partials/show.html',
      controler: 'ShowController'
    })
});
