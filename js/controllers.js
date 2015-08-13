'use strict';

/* Controllers */

angular.module('idaiBookBrowser.controllers',[])

.controller('MainController',	[ '$scope', '$location', '$http',
	function ($scope, $location, $http) {

		$scope.currentPage = 0;
		$scope.pageMinis = [];

		$scope.loadMore = function() {

			var last = $scope.pageMinis.length;
			for(var i = 0; i < 5; i++) {
				$scope.pageMinis.push($scope.book.pages[last + i]);
			}
		};


		$http.get('/sample_book.json').success(function(data){
			console.log(data);

			$scope.book=data;

			$scope.pageMinis[0] = $scope.book.pages[0];
			$scope.pageMinis[1] = $scope.book.pages[1];
			$scope.pageMinis[2] = $scope.book.pages[2];
			$scope.pageMinis[3] = $scope.book.pages[3];
			$scope.pageMinis[4] = $scope.book.pages[4];
			$scope.pageMinis[5] = $scope.book.pages[5];



			$scope.leftHandSidePage=$scope.book.pages[$scope.currentPage];
			$scope.rightHandSidePage=$scope.book.pages[$scope.currentPage+1];


		});
	}
]);