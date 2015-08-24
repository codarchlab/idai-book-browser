/**
 * Author: Daniel M. de Oliveira
 */

'use strict';

angular.module('idaiBookBrowser.controllers',[])

/**
 * api doc of main controller
 * $scope
 *   currentPageIndex - technical index of a book page which is focused (shown big). starts with 0.
 *   pageMinis - array of items of which each represents a minified book page
 */
.controller('MainController',	[ '$scope', '$location', '$http',
	function ($scope, $location, $http) {

		var defaultNrItems2Load = 5; // each time (for infinite scrolling)

		$scope.currentPageIndex = 0;
		$scope.pageMinis = [];

		var book = {}; // the json book data

		$scope.loadMore = function() {

			var nrPagesNotLoaded = book.pages.length - $scope.pageMinis.length;

			var nrPagesToLoad = defaultNrItems2Load;
			if (nrPagesNotLoaded<defaultNrItems2Load) nrPagesToLoad=nrPagesNotLoaded;

			for(var i = 0; i < nrPagesToLoad; i++) {
				$scope.pageMinis.push(book.pages[$scope.pageMinis.length + i]);
			}
		};


		$http.get('/sample_book.json').success(function(data){

			book=data;

			$scope.loadMore();

			$scope.leftHandSidePage=book.pages[$scope.currentPageIndex];
			$scope.rightHandSidePage=book.pages[$scope.currentPageIndex+1];
		});
	}
]);