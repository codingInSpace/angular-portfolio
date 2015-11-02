angular.module('portfolioApp').directive('projectCardButtons', function() {
  return {
    restrict: "E",
    replace: false,
    scope: {
      tryLink: "=",
      tryLinkDesc: "=",
      sourceLink: "=",
      sourceLinkDesc: "="
    },
    templateUrl: "app/components/project-card-buttons/projectCardButtons.html"
  }
});
