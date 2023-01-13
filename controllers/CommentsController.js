app.controller('CommentsController', CommentController);

CommentController.$inject = [
  '$scope',
  'CommentService',
  '$location',
  '$routeParams',
  'type'
];

function CommentController($scope, CommentService, $location, $routeParams, type) {
  $scope.save = () => {
    if ($scope.comment.id) {
      $scope.update();
    } else {
      $scope.create();
    };
  };

  $scope.create = () => {
    CommentService.create($routeParams.id, $scope.comment)
      .then(function (response) {
        if (response) {
          $location.path('/posts/' + $routeParams.id);
        } else {
          $scope.comment = {};
        };
    });
  };

  $scope.update = () => {
    CommentService.update($routeParams.id, $routeParams.comment_id, $scope.comment)
      .then(function (response) {
        if (response) {
          $location.path('/posts/' + $routeParams.id);
        } else {
          $scope.comment = {};
        };
      });
  };

  const initialize = () => {
    let token = window.localStorage.getItem('token');
    if (!token) {
      $location.path('/');
    }
    if(type == 'show' || type =='edit') {
      $scope.comment = {};
      $scope.post = {};

      $scope.post.id = $routeParams.id;
      CommentService.get($routeParams.id, $routeParams.comment_id).then(function (response) {
        if (response) {
          $scope.comment = response;
        };
      });
    };
  };
  initialize();
};