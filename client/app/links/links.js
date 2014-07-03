angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.getLinks = Links.getLinks;
  $scope.data = $scope.getLinks();
  console.log($scope.data);
});
