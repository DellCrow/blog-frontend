app.controller('LikesController', LikeController);

LikeController.$inject = [
  '$scope',
  'LikeService',
  '$routeParams',
];

function LikeController($scope, LikeService, $routeParams) {

  $scope.verifyIfPostIsLiked = (post) => {
    if(post.liked) {
      likePost(post);
    } else {
      dislikePost(post);
    }
  }

  $scope.verifyIfCommentIsLiked = (comment) => {
    if(comment.liked) {
      likeComment(comment);
    } else {
      dislikeComment(comment);
    }
  }

  const likePost = (post) =>{
    $scope.currentPost = post;
    LikeService.likePost(post).then(function (response) {
        if (response) {
          $scope.currentPost.likes_count++;
          $scope.currentPost.liked = true;
        };
    });
  };

  const dislikePost = (post) => {
    $scope.currentPost = post;
    LikeService.dislikePost(post).then(function () {
        $scope.currentPost.likes_count--;
        $scope.currentPost.liked = !$scope.currentPost.liked;
    });
  };

  const likeComment = (comment) => {
    $scope.currentComment = comment;
    LikeService.LikeComment($routeParams.id, comment.id).then(function (response) {
        if (response) {
          $scope.currentComment.likes_count++;
          $scope.currentComment.liked = true;
        };
    });
  };

  const dislikeComment = (comment) => {
    $scope.currentComment = comment;
    LikeService.dislikeComment($routeParams.id, comment.id).then(function() {
        $scope.currentComment.likes_count--;
        $scope.currentComment.liked = !$scope.currentComment.liked;
    })
  }
};