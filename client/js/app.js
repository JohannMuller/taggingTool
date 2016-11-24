var app = angular.module("taggingApp", ["ngRoute","ngResource"]);
app.config(function($routeProvider) {
  $routeProvider.when("/tags", {
      templateUrl: "../views/view-tags.html",
      controller: "tagsController"
    })
    .when("/tags/:index", {
      templateUrl: "../views/edit-tags.html",
      controller: "/controllers/editTagController"
    })
    .when("/untags", {
      templateUrl: "../views/view-untags.html",
      controller: "/controllers/untagsController"
    })
    .when("/untags/:index", {
      templateUrl: "/views/edit-tags.html",
      controller: "/controllers/editUntagController"
    })
    .when("/tagnames", {
      templateUrl: "../views/view-tagnames.html",
      controller: "/controllers/tagnamesController"
    })
    .otherwise({
      redirectTo: "/tags"
    });
});






