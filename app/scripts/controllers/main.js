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
    $scope.current = current.query();

    $scope.refreshCurrent = function(){
        $scope.current = current.query({
            tag: $scope.tag
        });
    };
  });