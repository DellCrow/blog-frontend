app.controller('PostsController', PostController);

PostController.$inject = [
  '$scope',
  'PostService',
  '$routeParams',
  'type',
  '$location',
  'TagService'
];

function PostController($scope, PostService, $routeParams, type, $location) {

  $scope.save = () => {
    if ($scope.post.id) {
      $scope.update();
    } else {
      $scope.create();
    };
  };

  $scope.create = () => {
    PostService.create($scope.post).then(function (response) {
        if (response) {
          $location.path('/posts/' + response.id);
        } else {
          $scope.post = {};
        };
    });
  };

  $scope.update = () => {
    PostService.update($scope.post).then(function (response) {
        if (response) {
          $location.path('/posts/' + $scope.post.id);
        } else {
          $scope.post = {};
        };
    });
  };

  $scope.postLiked = (post) => {
    if(post.liked) {
      $scope.dislike(post);
    } else {
      $scope.like(post);
    };
  };

  $scope.like = (post) => {
    $scope.currentPost = post;
    PostService.like(post).then(function (response) {
        if (response) {
          $scope.currentPost.likes_count++;
          $scope.currentPost.liked = true;
        };
    });
  }

  $scope.dislike = (post) => {
    $scope.currentPost = post;
    PostService.dislike(post).then(function () {
        $scope.currentPost.likes_count--;
        $scope.currentPost.liked = !$scope.currentPost.liked;
    });
  }

  const initialize = () => {
    if (type == 'show' || type == 'edit') {
      $scope.post = {};

      PostService.get($routeParams.id).then(function (response) {
        if (response) {
          $scope.post = response;
        };
      });
    } else {
      $scope.posts = [];

      PostService.list.then(function (response) {
        if (response && response.length > 0) {
          $scope.posts = response;
        };
      });
    };
  };

  initialize();
};
