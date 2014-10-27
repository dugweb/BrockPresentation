var main = angular.module('presentation', ['ngRoute', 'ngAnimate']);

main.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider
		.when('/', {
			templateUrl: 'slides/0-Welcome.html',
			controller:'slideController'
		})
		.when('/1', {
			templateUrl: 'slides/1-Selling.html',
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
		})
		.when('/5', {
			templateUrl: 'slides/5-Planning.html',
			controller: 'slideController'
		});

}]);