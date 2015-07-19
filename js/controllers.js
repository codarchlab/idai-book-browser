'use strict';

/* Controllers */

angular.module('idaiBookBrowser.controllers',[])

.controller('MainController',	[ '$scope', '$location', '$window',
	function ($scope, $location, $window) {

		$scope.user = {username:"daniel"};

		$scope.currentPath = $location.path();
		$scope.$on("$locationChangeSuccess", function() {
			$scope.currentPath = $location.path();
		});

		$scope.openLoginModal = function() {
			console.log('openLoginModal')
		};

		$scope.logout = function() {
			console.log('logout')
		}

	}
]);