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
    $scope.imageURL = "https://farm" + $routeParams.farm + ".staticflickr.com/" + $routeParams.server + "/" + $routeParams.id + "_" + $routeParams.secret + ".jpg";
  	$scope.mouseMove = function(event){
    	console.log(event.offsetX, event.offsetY);

    };
  });

// app.controller('personCtrl', function($scope) {
//     $scope.firstName = "John";
//     $scope.lastName = "Doe";
//     $scope.fullName = function() {
//         return $scope.firstName + " " + $scope.lastName;
//     };
// });
