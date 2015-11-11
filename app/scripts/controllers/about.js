'use strict';

/**
 * @ngdoc function
 * @name paintbrushApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the paintbrushApp
 */
angular.module('paintbrushApp')
  .controller('AboutCtrl', function ($scope, current, oldsearches, $localStorage) {

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.savedSearch = $localStorage.savedSearch; 
    $scope.refreshCurrent = function(){
        $scope.current = current.get({
            text: $scope.title
        });
        console.log($scope.title);
        if (!$localStorage.savedSearch){
        	$localStorage.savedSearch = $scope.title;
       	}

  };
  });
