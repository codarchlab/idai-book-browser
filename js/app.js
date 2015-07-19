var routerApp = angular.module('idaiBookBrowser', [
	'ui.bootstrap',
	'ui.router',
	'templates-main',
	'idai.services',
	'idai.filters',
	'idai.directives',
	'idaiBookBrowser.controllers'
]);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        .state('home', {
            url: '/home',
            templateUrl: 'partials/home.html'
        })
        
        .state('about', {
            url: '/about',
			templateUrl: 'partials/about.html'     
        });
        
});