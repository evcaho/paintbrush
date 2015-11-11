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
  	if (!$localStorage.savedSearch) {
  		$localStorage.savedSearch = [];
  	}
  	$scope.savedSearch = $localStorage.savedSearch; 
    $scope.refreshCurrent = function(){
    	$localStorage.savedSearch.push($scope.title);
        $scope.current = current.get({
            text: $scope.title
        });
        console.log($scope.title);
        

    };
  });
// angular.module('paintbrushApp')
//   .controller('MainCtrl', function ($scope, current, oldsearches, $localStorage) {
//   	$scope.savedSearch = $localStorage.savedSearch; 
//   	// $scope.savedSearch = oldsearches.find();
//   		$scope.findPhotos = function(){
//   			$scope.savedSearch = oldsearches.find({
//   				 query: $scope.location
//         });
//  	$scope.searchQuery = $scope.location;

//     $scope.refreshCurrent = function(){
//         $scope.current = current.get({
//             text: $scope.title
//         });
//         console.log($scope.title);
//   //       /angular.module('paintbrushApp')
//   // .controller('MainCtrl', function ($scope, current, oldsearches, $localStorage) {
//   // 	$scope.savedSearch = $localStorage.savedSearch; 
//   //   $scope.refreshCurrent = function(){
//   //       $scope.current = current.get({
//   //           text: $scope.title
//   //       });
//   //       console.log($scope.title);
//   //       if (!$localStorage.savedSearch){
//   //       	$localStorage.savedSearch = $scope.title;
//   //      	}

//   //   };
//   // });
       	

//     };
//   };
// });


