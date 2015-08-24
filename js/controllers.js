/**
 * Author: Daniel M. de Oliveira
 */

'use strict';

/* Controllers */

angular.module('idaiBookBrowser.controllers',[])

/**
 * api doc of main controller
 */
.controller('MainController',	[ '$scope', '$location', '$http',
	function ($scope, $location, $http) {



		$scope.currentPage = 0;
		$scope.pageMinis = [];

		$scope.loadMore = function() {


			var newItemCountMax = 5;

			var last = $scope.pageMinis.length;

			var diff = $scope.book.pages.length-$scope.pageMinis.length;

			var newItemCount = newItemCountMax;
			if (diff<newItemCountMax) newItemCount=diff;


			for(var i = 0; i < newItemCount; i++) {
				$scope.pageMinis.push($scope.book.pages[last + i]);
			}
		};


		$http.get('/sample_book.json').success(function(data){

			$scope.book=data;

			$scope.loadMore();

			$scope.leftHandSidePage=$scope.book.pages[$scope.currentPage];
			$scope.rightHandSidePage=$scope.book.pages[$scope.currentPage+1];


		});
	}
]);