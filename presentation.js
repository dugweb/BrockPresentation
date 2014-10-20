var main = angular.module('presentation', ['ngRoute', 'ngAnimate']);

main.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider
		.when('/', {
			templateUrl: 'slides/1-welcome.html',
			controller: 'slideController'
		})
		.when('/2', {
			templateUrl: 'slides/2-slide2.html',
			controller:'slideController'
		});

}]);