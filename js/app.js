angular.module('portfolioApp', ["ngRoute"])
	.controller('PresentationController', function($scope) {
		$scope.text = "Jonathan";

		var toggleSelected = function() {
			$('#projects-link').removeClass("pure-menu-selected");
			$('#presentation-link').addClass("pure-menu-selected");
		}

		toggleSelected();
	})

	.controller('ProjectsController', function($scope) {
		$scope.text = "Such projects much show";

		var toggleSelected = function() {
			$('#presentation-link').removeClass("pure-menu-selected");
			$('#projects-link').addClass("pure-menu-selected");
		}

		toggleSelected();
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
