var main = angular.module('presentation', ['ngRoute', 'ngAnimate']);



main.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider
		.when('/', {
			templateUrl: 'slides/0-Welcome.html',
			controller:'welcomeController'
		})
		.when('/1', {
			templateUrl: 'slides/1-asset.html',
			controller: 'assetController'
		})
		.when('/2', {
			templateUrl: 'slides/2-definition.html',
			controller:'definitionController'
		})
		.when('/3', {
			templateUrl: 'slides/3-Time.html',
			controller: 'timeController'
		})
		.when('/4', {
			templateUrl: 'slides/4-income.html',
			controller: 'incomeController'
		})
		.when('/5', {
			templateUrl: 'slides/5-roadmap.html',
			controller: 'roadmapController'
		});
	
}]);

main.controller('navController', ['$scope', function($scope) {
	var nav;
	$scope.init = function() {
		nav = document.getElementsByTagName('nav');

		nav[0].addEventListener('mouseenter', mouseEnterHandler);
		nav[0].addEventListener('mouseleave', mouseLeaveHandler);
	}
	function mouseEnterHandler() {
		TweenLite.to(nav, .3, {opacity: 1});
	}

	function mouseLeaveHandler() {
		TweenLite.to(nav, .3, {opacity: .3});
	}
	$scope.init();
}]);