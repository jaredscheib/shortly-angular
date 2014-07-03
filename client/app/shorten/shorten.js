angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.data = {shortenedLinks: []};
  $scope.shortenLink = function(link){
    Links.shortenLink(link).then(function(resp){
      console.log(resp);
      $scope.data.shortenedLinks.push(resp.data);
    });
  };
});
