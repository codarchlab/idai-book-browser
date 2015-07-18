var routerApp = angular.module('idaiBookBrowser', [
	'ui.router',
	'templates-main',
	'idai.services',
	'idai.filters',
	'idai.directives',
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