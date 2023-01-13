app.directive('like', function() {
  return {
    restrict: 'E',
    scope: {
      post: '=?',
      comment: '=?'
    },
    templateUrl: 'views/components/page/like.html',
    controller: function($scope, LikeService, $routeParams) {
      $scope.verifyIfPostIsLiked = () => {
        if (!$scope.post.liked) {
          likePost()
        } else {
          dislikePost()
        }
      }

      const likePost = () => {
        LikeService.likePost($scope.post)
          .then(function(response) {
            if (response) {
              $scope.post.likes_count++;
              $scope.post.liked = true;
            }
        })
      }

      const dislikePost = () => {
        LikeService.dislikePost($scope.post)
          .then(function() {
            $scope.post.likes_count--;
            $scope.post.liked = !$scope.post.liked;
        })
      }

      $scope.verifyIfCommentIsLiked = () => {
        if (!$scope.comment.liked) {
          likeComment($scope.comment)
        } else {
          dislikeComment($scope.comment)
        }
      }

      const likeComment = (comment) => {
        LikeService.likeComment($routeParams.id, comment.id)
          .then(function (response) {
            if (response) {
              $scope.comment.likes_count++;
              $scope.comment.liked = true;
            }
        })
      }

      const dislikeComment = (comment) => {
        LikeService.dislikeComment($routeParams.id, comment.id)
          .then(function () {
            $scope.comment.likes_count--;
            $scope.comment.liked = !$scope.comment.liked;
        })
      }
    }
  }
})