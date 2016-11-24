app.controller("tagnamesController", ["$scope", "$resource", "$location", "$routeParams", function($scope, $resource, $location, $routeParams) {

  $scope.items = taggingService.getTagNames();

  $scope.backToTagged = function() {
    $location.path("/tags");
  };

  $scope.backToUntagged = function() {
    $location.path("/untags");
  };

}]);