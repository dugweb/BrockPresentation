main.controller('slideController', ['$scope', function($scope) {
	$scope.init = function() {
		var el = document.getElementById('business-value-chart');
		console.log(el);

		TweenLite.to(el, 10, {strokeDashoffset:0, onComplete:judist});
		
	}
	function judist() {
		alert('complete');
	}

	$scope.init();
}]);