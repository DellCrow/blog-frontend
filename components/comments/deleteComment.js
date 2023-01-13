app.directive('deleteComment', function () {
  return {
    restrict: 'E',
    scope: {
      comment: '='
    },
    templateUrl: 'views/components/comments/delete.html',
    controller: function ($scope, CommentService, $window, $stateParams) {
      $scope.delete = () => {
        CommentService.destroy($stateParams.id, $scope.comment).then(function () {
          $window.location.reload();
        });
      };
    }
  };
});