'use strict';

/**
 * @ngdoc function
 * @name paintbrushApp.controller:CurrentCtrl
 * @description
 * # CurrentCtrl
 * Controller of the paintbrushApp
 */
angular.module('paintbrushApp')
  .controller('CurrentCtrl', function ($scope, $routeParams) {
    console.log($routeParams);
    console.log("https://farm" + $routeParams.farm + ".staticflickr.com/" + $routeParams.server + "/" + $routeParams.id + "_" + $routeParams.secret + ".jpg");
    $scope.imageURL = "https://farm" + $routeParams.farm + ".staticflickr.com/" + $routeParams.server + "/" + $routeParams.id + "_" + $routeParams.secret + ".jpg";
  });
