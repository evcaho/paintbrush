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
    return $resource('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=8629caf97218f887137af0b8b48345c1&tags=seattle&format=json&nojsoncallback=1&auth_token=72157660383692590-6d572e0f167ce194&api_sig=ecc30e46620f5ca6736363d79b775400', {}, {
      query: {
        method:'GET',
        // params:{
        //   method: 'flickr.photos.getRecent',
        //   api_key: 'af2e9eca76c375ff2ade6f2902acff31',
        //   title: 'Flickr',
        //   format: 'json',
        // },
      }
    });
  });

