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
            text: $scope.title
        });
    };
  });

