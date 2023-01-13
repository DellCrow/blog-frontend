app.controller('TagsController', TagController);

TagController.$inject = [
  '$scope',
  'TagService',
  '$location',
  '$routeParams',
  'type',
  '$window'
];

function TagController($scope, TagService, $location, $routeParams, type) {
  $scope.save = () => {
    if ($scope.tag.id) {
      $scope.update();
    } else {
      $scope.create();
    };
  };

  $scope.create = () => {
    TagService.create($scope.tag)
      .then(function (response) {
        if (response) {
          $location.path('/tags');
        } else {
          $scope.tag = {};
        };
    });
  };

  $scope.update = () => {
    TagService.update($scope.tag)
      .then(function (response) {
        if (response) {
          $location.path('/tags');
        } else {
          $scope.tag = {};
        };
    });
  };

  const initialize = () => {
    let token = window.localStorage.getItem('token');
    if (!token) {
      $location.path('/');
    }
    if(type == 'edit') {
      $scope.tag = {};

      TagService.get($routeParams.id).then(function (response) {
        if (response) {
          $scope.tag = response;
        };
      });
    } else {
      $scope.tags = [];

      TagService.list.then(function (response) {
        if (response && response.length > 0) {
          $scope.tags = response;
        }
      });
    };
  };

  initialize();
};