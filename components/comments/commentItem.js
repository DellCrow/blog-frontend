app.directive('commentItem', function () {
  return {
    restrict: 'E',
    templateUrl: 'views/components/comments/item.html',
    controller: function ($scope, CommentService, $routeParams) {
      $scope.commentLiked = (comment) => {
        if(comment.liked) {
          $scope.dislike(comment);
        } else {
          $scope.like(comment);
        };
      };

      $scope.like = (comment) => {
        $scope.currentComment = comment;
        CommentService.like($routeParams.id, comment.id)
          .then(function (response) {
            if (response) {
              $scope.currentComment.likes_count++;
              $scope.currentComment.liked = true;
            };
        });
      };

      $scope.dislike = (comment) => {
        $scope.currentComment = comment;
        CommentService.dislike($routeParams.id, comment.id)
          .then(function () {
            $scope.currentComment.likes_count--;
            $scope.currentComment.liked = !$scope.currentComment.liked;
        });
      };

      const initialize = () => {
        $scope.comments = [];
        $scope.post = {};

        $scope.post.id = $routeParams.id;
        CommentService.list($routeParams).then(function (response) {
          if (response && response.length > 0) {
            $scope.comments = response;
          };
        });
      };

      initialize();
    }
  };
});