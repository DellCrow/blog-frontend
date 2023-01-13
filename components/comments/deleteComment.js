app.directive('deleteComment', function () {
  return {
    restrict: 'E',
    scope: {
      comment: '='
    },
    templateUrl: 'views/components/comments/delete.html',
    controller: function ($scope, CommentService, $window, $routeParams) {
      $scope.delete = () => {
        CommentService.destroy($routeParams.id, $scope.comment).then(function () {
          $window.location.reload();
        });
      };
    }
  };
});