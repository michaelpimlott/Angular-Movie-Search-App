app.controller('ShowController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  var id = $routeParams.id;
  $http.get('http://www.omdbapi.com/?i=' + id).then(function(data) {
    $scope.movie = data.data;
  });
}])
