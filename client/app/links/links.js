angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.getLinks = Links.getLinks;
  $scope.data = {};
  $scope.getLinks().then(function(resp){
    console.log(resp.data);
    $scope.data.links = resp.data;
  });
});
