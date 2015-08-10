angular.module('portfolioApp', ["ngRoute"])
	.controller('PresentationController', function($scope) {
		$scope.text = "Jonathan";
	})

	.controller('ProjectsController', function($scope) {
		$scope.text = "Such projects much show";
	})

	.config(["$routeProvider", function($routeProvider) {
		$routeProvider 
		.when('/', { 
		  controller: 'PresentationController', 
		  templateUrl: 'views/presentation.html' 
		})
		.when('/projects', {
			controller: 'ProjectsController',
			templateUrl: 'views/projects.html'
		})
		.otherwise({ 
		  redirectTo: '/' 
		}); 
	}]);
