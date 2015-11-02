angular.module('portfolioApp').directive('contactLinks', function() {
  return {
    restrict: "E",
    replace: false,
    scope: {
      item: "="
    },
    templateUrl: "app/components/contact-links/contactLinks.html"
  }
});
