var app = angular.module('myModule', [] );

app.factory('herokuService', function($scope, $http) {
	$http ({
		method: GET,
		url: 'https://twlaas.herokuapp.com/'
	});
})