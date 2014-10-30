/* ---------------------------------------------------------
|
|  Welcome Controller
|
|  --------------------------------------------------------- */

main.controller('welcomeController', ['$scope', function($scope) {
	var tl = tl || new TimelineLite();

	$scope.init = function() {
		console.log('welcome');
	}
	function judist() {

	}
	$scope.init();
}]);


/* ---------------------------------------------------------
|
|  Asset Controller
|
|  --------------------------------------------------------- */

main.controller('assetController', ['$scope', function($scope) {
	var tl = tl || new TimelineLite();

	$scope.init = function() {
		var el = $('#business-value-chart');
		var shape = document.getElementById('business-value-chart');
		el.css({'stroke-dashoffset': shape.getTotalLength(), 'stroke-dasharray': shape.getTotalLength()});
		
	
		var labels = $('.label');
		var soldMarker = $('.sold-marker');

		labels.each(function(i) {
			tl.from(this, 2,{scale:0, ease: Elastic.easeOut}, "-=1.5");
		});

		
		tl.to(el, 10, {strokeDashoffset:0, onComplete:judist}, "-=1.5");
		tl.from(soldMarker, .5, {scale: 0, opacity: 0, ease: Back.easeOut})
	}
	function judist() {
		

	}
	$scope.init();
}]);


/* ---------------------------------------------------------
|
|  Definition Controller
|
|  --------------------------------------------------------- */


main.controller('definitionController', ['$scope', function($scope) {
	var tl = tl || new TimelineLite();

	$scope.init = function() {
		console.log('definition');
		console.log(tl);
	}
	function judist() {
		
	}
	$scope.init();
}]);

/* ---------------------------------------------------------
|
|  Time Controller
|
|  --------------------------------------------------------- */

main.controller('timeController', ['$scope', function($scope) {
	var tl = tl || new TimelineLite();

	$scope.init = function() {
		console.log('time');
	}
	function judist() {

	}
	$scope.init();
}]);

/* ---------------------------------------------------------
|
|  Welcome Controller
|
|  --------------------------------------------------------- */

main.controller('incomeController', ['$scope', function($scope) {
	var tl = tl || new TimelineLite();

	$scope.init = function() {
		console.log('income');
	}
	function judist() {

	}
	$scope.init();
}]);

/* ---------------------------------------------------------
|
|  Welcome Controller
|
|  --------------------------------------------------------- */

main.controller('roadmapController', ['$scope', function($scope) {
	var tl = tl || new TimelineLite();

	$scope.init = function() {
		console.log('roadmap');
	}
	function judist() {

	}
	$scope.init();
}]);
