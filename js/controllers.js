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
	$scope.init();
}]);

/* ---------------------------------------------------------
|
|  Income Controller
|
|  --------------------------------------------------------- */

main.controller('incomeController', ['$scope', function($scope) {

	$scope.init = function() {
		console.log('income');
	}
	$scope.init();
}]);

/* ---------------------------------------------------------
|
|  RoadMap Controller
|
|  --------------------------------------------------------- */

main.controller('roadmapController', ['$scope', function($scope) {

	var $el = $('#roadmap');
	var $lis = $el.find(">li");
	var curIndex = 0;
	$scope.init = function() {
		$el.width(($lis.width() + 20) * $lis.length);
		$lis.each(function(i) {
			this.addEventListener('click', clickHandler);
		});
	}

	$scope.beginning = function() {
		curIndex -= 1;
		if (curIndex < 0) {
			curIndex = $lis.length - 1;
		}

		clickHandler();
	}
	$scope.nextMeeting = function() {
		curIndex += 1;
		if (curIndex > $lis.length - 1) {
			curIndex = 0;
		}
		clickHandler();
	}


	function clickHandler(e) {
		if (e != undefined) {
			// grab the index of the slide that was clicked
			curIndex = $el.find(e.target.parentElement).index();	
		}

		$el.css({'margin-left': -curIndex * ($lis.width() + 20)});
	}

	$scope.init();
}]);
