var scotchApp = angular.module('app', ['ngRoute']);

scotchApp.config(function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl : 'pages/home.html',
			controller  : 'mainController'
		})

		.when('/about', {
			templateUrl : 'pages/about.html',
			controller  : 'aboutController'
		})

		.when('/contact', {
			templateUrl : 'pages/contact.html',
			controller  : 'contactController'
		});

	$locationProvider.html5Mode(true);
});

scotchApp.controller('mainController', function($scope) {
	$scope.message = 'Everyone come and see how good I look!';
});

scotchApp.controller('aboutController', function($scope) {
	$scope.message = 'Look! I am an about page.';
});

scotchApp.controller('contactController', function($scope) {
	$scope.message = 'Contact us!';
});
