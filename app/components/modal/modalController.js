angular.module('portfolioApp').controller('ModalController',  [
  '$scope', '$element', 'title', 'image', 'descLong', 'teamDesc', 'tryLink', 'tryLinkDesc', 'sourceLink', 'sourceLinkDesc', 'close',
  function($scope, $element, title, image, descLong, teamDesc, tryLink, tryLinkDesc, sourceLink, sourceLinkDesc, close) {

    $scope.title = title;
    $scope.image = image;
    $scope.descLong = descLong;
    $scope.teamDesc = teamDesc;
    $scope.tryLink = tryLink;
    $scope.tryLinkDesc = tryLinkDesc;
    $scope.sourceLink = sourceLink;
    $scope.sourceLinkDesc = sourceLinkDesc;
}]);
