angular.module('portfolioApp')
	.directive('headerBar', function ($location) {
    return {
        restrict: 'A', 
				replace: false,
        templateUrl: "app/components/headerbar/headerBar.html"
    }
});
