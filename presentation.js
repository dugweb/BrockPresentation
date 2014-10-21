var main = angular.module('presentation', ['ngRoute', 'ngAnimate']);

main.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider
		.when('/1', {
			templateUrl: 'slides/1-welcome.html',
			controller: 'slideController'
		})
		.when('/2', {
			templateUrl: 'slides/2-AvailableMoney.html',
			controller:'slideController'
		})
		.when('/3', {
			templateUrl: 'slides/3-Time.html',
			controller: 'slideController'
		})
		.when('/4', {
			templateUrl: 'slides/4-Planning.html',
			controller: 'slideController'
		});

}]);