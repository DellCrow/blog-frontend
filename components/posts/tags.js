app.directive('tags', function () {
  return {
    restrict: 'E',
    scope: {
      posts: '=',
      post: '='
    },
    templateUrl: 'views/components/posts/tags.html',
    controller: function ($scope, PostService, TagService) {

      $scope.getPostTags = (post) => {
        if ($scope.posts[post.id] && $scope.posts[post.id].tags) {
          return;
        }
        PostService.getPostTags(post)
          .then(function (response) {
            $scope.posts[post.id].tags = response;
        });
      };

      const removeTagElement = (post, tag) => {
        if($scope.posts[post.id] && $scope.posts[post.id].tags) {
          for (let i = 0; i < $scope.posts[post.id].tags.length; i++) {
            if ($scope.posts[post.id].tags[i].id == tag.id) {
              $scope.posts[post.id].tags.splice(i, 1);
              break;
            };
          };
        };
      };

      const addTagElement = (post, tag) => {
        if ($scope.posts[post.id] && $scope.posts[post.id].tags && !$scope.posts[post.id].tags.includes(tag)) {
          $scope.posts[post.id].tags.push(tag);
        };
      };

      $scope.removeTagFromPost = (post, tag) => {
        PostService.unlinkTag(post, tag)
          .then(function (response) {
            if (response) {
              removeTagElement(post, tag);
            };
        });
      };

      $scope.addTagToPost = (post, tag) => {
        if($scope.posts[post.id] && $scope.posts[post.id].tags && !$scope.posts[post.id].tags.includes(tag)) {
          PostService.linkTag(post, tag)
            .then(function (response) {
              if (response) {
                addTagElement(post, tag);
              };
          });
        };
      };

      const initialize = () => {
        $scope.tags = [];

        TagService.list.then(function (response) {
          if (response && response.length > 0) {
            $scope.tags = response;
          };
        });
      };

      initialize();
    }
  };
});