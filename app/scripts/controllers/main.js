'use strict';

/**
 * @ngdoc function
 * @name paintbrushApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the paintbrushApp
 */
angular.module('paintbrushApp')
  .controller('MainCtrl', function ($scope, current, oldsearches, $localStorage) {
  	$scope.searchesFound = oldsearches.find();

    $scope.findCities = function(){
        $scope.searchesFound = oldsearches.find({
            query: $scope.searchText
        });
        $scope.searchQuery = $scope.location;
    };

  	$scope.storage = $localStorage;
    $scope.refreshCurrent = function(){
        $scope.current = current.get({
            text: $scope.title
        });
    };
  });

