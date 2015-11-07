'use strict';
console.log("Hi");
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
    

    // Public API here
    return $resource(
      'https://api.flickr.com/services/rest/',  
      {
        method: 'flickr.photos.getRecent',
        api_key: 'af2e9eca76c375ff2ade6f2902acff31',
        text: location.search,
        format: 'json',
        nojsoncallback: 1
      }
    );
  });

