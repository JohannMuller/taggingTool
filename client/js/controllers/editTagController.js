app.controller("editTagController", ["$scope", "$resource", "$location", "$routeParams", function($scope, $resource, $location, $routeParams) {

  $scope.Item = taggingService.getTags()[parseInt($routeParams.index)];

  $scope.save = function() {
    taggingService.editTag(parseInt($routeParams.index), {
      name: $scope.Item.name,
      tag: $scope.Item.tag
    });
    $location.path("/tags");
  };

  $scope.cancel = function() {
    $location.path("/tags");
  };

}]);