app.directive('deletePost', function () {
  return {
    restrict: 'E',
    scope: {
      post: '='
    },
    templateUrl: 'views/components/posts/delete.html',
    controller: function ($scope, PostService, $window) {
      $scope.delete = () => {
        PostService.destroy($scope.post).then(function () {
          $window.location.reload();
        });
      };
    }
  };
});