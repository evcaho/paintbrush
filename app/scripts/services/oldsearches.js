'use strict';

/**
 * @ngdoc service
 * @name paintbrushApp.oldsearches
 * @description
 * # oldsearches
 * Factory in the paintbrushApp.
 */
angular.module('paintbrushApp')
  .factory('oldsearches', function ($resource) {
    return $resource(
      'https://api.flickr.com/services/rest/',  
      {
        method: 'flickr.photos.search',
        api_key: 'af2e9eca76c375ff2ade6f2902acff31',
        format: 'json',
        nojsoncallback: 1
      }
    );
  });

    

// $scope.citiesFound = citysearch.find({
//     query: $scope.searchText
// });

