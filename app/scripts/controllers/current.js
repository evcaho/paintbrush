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
     $scope.imageURL = $routeParams.imageURL;

    $scope.currentImage = current.query({
        imageURL: $routeParams.imageURL
    });
    
  });
