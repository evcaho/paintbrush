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
    return $resource('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=d2ce9f1063dc70eed9c12152ade7956b&tags=seattle&format=json&nojsoncallback=1&auth_token=72157660913960885-a54c879d8991370b&api_sig=861568497c0021c2cd43b0a564949087', {}, {
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

