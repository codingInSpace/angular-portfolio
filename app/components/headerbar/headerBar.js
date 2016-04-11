angular.module('portfolioApp')
	.directive('headerBar', function () {
    return {
        restrict: 'A', 
        replace: true,
        templateUrl: "app/components/headerbar/headerBar.html",
    }
});
