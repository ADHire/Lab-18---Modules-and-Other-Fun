var app = angular.module('myModule');

app.controller('ctrl1', function($scope, myService) {
	$scope.store = function(animal, what) {
		myService.save(animal, what);
	};
});