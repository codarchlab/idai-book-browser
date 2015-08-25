var routerApp = angular.module('idaiBookBrowser', [
	'ui.bootstrap',
	'ui.router',
	'idai.templates',
	'idai.components',
	'idaiBookBrowser.controllers',
    'infinite-scroll'
]);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/book');
    
    $stateProvider

        .state('home', {
            url: '/home',
            templateUrl: 'partials/home.html'
        })

        .state('book', {
            url: '/book',
            templateUrl: 'partials/book.html'
        })
        
        .state('about', {
            url: '/about',
			templateUrl: 'partials/about.html'     
        });
        
});
