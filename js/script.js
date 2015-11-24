var app = angular.module('myModule', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.when('/setData',{
		controller: 'ctrl1',
		templateUrl: "view/setData.html"
	}); 
	$routeProvider.when('/viewData',{
		controller: 'ctrl2',
		templateUrl: "view/viewData.html"
	});
});