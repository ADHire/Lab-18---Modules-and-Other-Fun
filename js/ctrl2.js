var app = angular.module('myModule');

app.controller('ctrl2', function($scope, myService) {
	var animalWhat = myService.get()
		$scope.animal = animalWhat.animal;
		$scope.what = animalWhat.what;
});