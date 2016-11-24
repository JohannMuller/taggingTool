app.controller("untagsController", ["$scope", "$resource", "$location", "$routeParams", function($scope, $resource, $location, $routeParams) {

  $scope.items = taggingService.getUntags();

  $scope.taggedView = function() {
    $location.path("/tags");
    taggingService.getTags();
  };

  $scope.editItem = function(index) {
    $location.path("/untags/" + index);
  };
  
  $scope.tagnamesView = function() {
    $location.path("/tagnames");
  };

}]);
