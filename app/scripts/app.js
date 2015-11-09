'use strict';

/**
 * @ngdoc overview
 * @name paintbrushApp
 * @description
 * # paintbrushApp
 *
 * Main module of the application.
 */
angular
  .module('paintbrushApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngStorage',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
//   $scope.saveCity = function(city){
//     var cityData = {
//         'name': city.name,
//         'id': city.id
//     };
//     if (!$localStorage.savedCities){
//         $localStorage.savedCities = [cityData];
//     } else {
//         // We have already saved some cities. 
//         // Check to make sure we haven't already saved the current city.
//         var save = true; // Initialize the save decision variable.
//         // Use this loop to check if we've already saved the city.
//         for (var i=0; i < $localStorage.savedCities.length; i++){
//             if ($localStorage.savedCities[i].id == cityData.id) {
//                 // This is a duplicate, so don't save (variable set to false).
//                 save = false;
//             }
//         }
//         if (save==true){
//             $localStorage.savedCities.push(cityData);
//         } else {
//             console.log('city already saved');
//         }
//     }
// };
