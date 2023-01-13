app.controller('CommentsController', CommentController);

CommentController.$inject = [
  '$scope',
  'CommentService',
  '$location',
  '$stateParams',
  'type'
];

function CommentController($scope, CommentService, $location, $stateParams, type) {
  $scope.save = () => {
    if ($scope.comment.id) {
      $scope.update();
    } else {
      $scope.create();
    };
  };

  $scope.create = () => {
    CommentService.create($stateParams.id, $scope.comment)
      .then(function (response) {
        if (response) {
          $location.path('/posts/' + $stateParams.id);
        } else {
          $scope.comment = {};
        };
    });
  };

  $scope.update = () => {
    CommentService.update($stateParams.id, $stateParams.comment_id, $scope.comment)
      .then(function (response) {
        if (response) {
          $location.path('/posts/' + $stateParams.id);
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

      $scope.post.id = $stateParams.id;
      CommentService.get($stateParams.id, $stateParams.comment_id).then(function (response) {
        if (response) {
          $scope.comment = response;
        };
      });
    };
  };
  initialize();
};