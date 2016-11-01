angular.module('portfolioApp')
	.directive('resume', function ($location) {
    return {
			restrict: 'A', 
			replace: false,
			templateUrl: "app/components/resume/resumeView.html"
    }
});
