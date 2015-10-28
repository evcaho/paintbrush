'use strict';

/**
 * @ngdoc service
 * @name paintbrushApp.current
 * @description
 * # current
 * Factory in the paintbrushApp.
 */
angular.module('paintbrushApp')
  .factory('current', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/weather?q=:location&units=imperial&APPID=728520c2bdcdd7595dc15031af86d4d2', {}, {
      query: {
        method:'GET',
        params:{
          location: 'Seattle,us'
        },
        isArray:false
      }
    });
  });
