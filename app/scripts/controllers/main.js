'use strict';

/**
 * @ngdoc function
 * @name paintbrushApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the paintbrushApp
 */
angular.module('paintbrushApp')
  .controller('MainCtrl', function ($scope, current) {

    $scope.refreshCurrent = function(){
        $scope.current = current.get({
            // title: $scope.title
        });

        $scope.current.$promise.then(function(result) {
        	$scope.current=result; 
        });
        console.log($scope.current);
// $scope.result = [
//     angular.fromJson(data.resultList[0]),
//     angular.fromJson(data.resultList[1])
// ];
// alert($scope.result[0].codeName);
// //         */ new function (scope parse json), scope create url
// angular.fromJson(json);     
    
    };
  });

