/**
 * Author: Daniel M. de Oliveira
 */

'use strict';

angular.module('idaiBookBrowser.controllers',[])

/**
 * api doc of main controller
 * $scope
 *   currentPageIndex - technical index of a book page which is focused (shown big). starts with 0.
 *   pageMinis - array of page objects. A subset of all page objects.
 *     Contains page objects availabe for the page preview.
 *   book - book metadata
 */
.controller('BookController',	[ '$scope', '$http',
	function ($scope, $http) {

		var defaultNrItems2Load = 5; // each time (for infinite scrolling)

        var bookJsonDataLoaded = false;

		$scope.currentPageIndex = 0;

		$scope.pageMinis = [];
        $scope.book = {};
        $scope.book.id = 515; // = arachne id of the book

		var bookJsonData = {};

        $scope.changeFocus = function(focusOn) {

            console.log(focusOn)
            $scope.currentPageIndex=focusOn;
            $scope.leftHandSidePage = bookJsonData.pages[$scope.currentPageIndex];
            $scope.rightHandSidePage = bookJsonData.pages[$scope.currentPageIndex + 1];
        }

		/**
		 * Each time a certain amount of page objects
		 * from the book get added to the page preview.
		 */
		$scope.loadMore = function() {
            if (!bookJsonDataLoaded) return; // to prevent early access while rendering

			var nrPagesNotLoaded = bookJsonData.pages.length - $scope.pageMinis.length;

			var nrPagesToLoad = defaultNrItems2Load;
			if (nrPagesNotLoaded<defaultNrItems2Load) nrPagesToLoad=nrPagesNotLoaded;

            var pageMinisIndex = $scope.pageMinis.length;
			for ( var i = 0; i < nrPagesToLoad; i++ )
                $scope.pageMinis.push(bookJsonData.pages[pageMinisIndex + i]);
		};

        if (!bookJsonDataLoaded)
            $http.get('/sample_book.json').success(function(data){

                bookJsonData=data;
                bookJsonDataLoaded = true;

                $scope.loadMore();
                $scope.changeFocus(0);
            });
	}
]);