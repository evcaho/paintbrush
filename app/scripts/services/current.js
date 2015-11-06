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
    return $resource('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=96660d90270c473673f87f092318c344&tags=seattle&format=json&nojsoncallback=1&auth_token=72157660101504498-3db77f6b8b516c58&api_sig=a1fc463de2be2e3cf81c21e104fc695f', {}, {
      query: {
        method:'GET',
        // params:{
        //   method: 'flickr.photos.getRecent',
        //   api_key: 'af2e9eca76c375ff2ade6f2902acff31',
        //   text: location.search,
        //   format: 'json',
        //   nojsoncallback: 1,
        // },
      }
    });
  });

