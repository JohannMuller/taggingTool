app.controller("tagsController", ["$scope", "$resource", "$location", "$routeParams", function($scope, $resource, $location, $routeParams) {

  var Tag = $resource("/api/tags");
  Tag.query(function(results){
	 $scope.items = results; 
	 console.log("The items = ", items);
  });

  $scope.untaggedView = function() {
    $location.path("/untags");
  };

  $scope.editItem = function(index) {
    $location.path("/tags/" + index);
  };

  $scope.tagnamesView = function() {
    $location.path("/tagnames");
  };

}]);