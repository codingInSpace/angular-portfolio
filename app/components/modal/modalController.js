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

    // console.log("trylink: " + $scope.tryLink);

    $scope.close = function() {
      close({}, 500); 	// close, but give 500ms for animation
    };

    //  This cancel function must use the bootstrap 'modal' function because
    //  it doesn't have the 'data-dismiss' attribute.
    $scope.cancel = function() {
      $element.modal('hide');		//  Manually hide the modal.
      close({}, 500); 					// close, but give 500ms for animation
    };
}]);
