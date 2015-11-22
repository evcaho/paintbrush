'use strict';

/**
 * @ngdoc function
 * @name paintbrushApp.controller:CurrentCtrl
 * @description
 * # CurrentCtrl
 * Controller of the paintbrushApp
 */
angular.module('paintbrushApp')
  .controller('CurrentCtrl', function ($scope, $routeParams) {
    $scope.imageURL = "https://farm" + $routeParams.farm + ".staticflickr.com/" + $routeParams.server + "/" + $routeParams.id + "_" + $routeParams.secret + ".jpg";
  	$scope.mouseMove = function(event){
    	var node = document.getElementById("cursor");
    	node.style.top = "" + event.offsetY + "px";
    	node.style.left = "" + event.offsetX + "px";
    	var painting = node.cloneNode();
    	painting.id = "";
    	var canvas = document.getElementById("canvas");
    	console.log(canvas);
    	canvas.appendChild(painting);
    };
  });

