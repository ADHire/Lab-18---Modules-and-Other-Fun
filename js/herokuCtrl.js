(function() {
	var app = angular.module('myModule', []);

app.controller('herokuCtrl', function($scope, $http) {
	$http.get('https://twlaas.herokuapp.com/')
	.success(function(data) {
		console.log('youre a god damn beast');
		$scope.data = data;
	})
	.error(function() {
		console.log('you dun goofed');
	});
});
})();