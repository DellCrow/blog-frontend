app.directive('deleteTag', function () {
  return {
    restrict: 'E',
    scope: {
      tag: '='
    },
    templateUrl: 'views/components/tags/delete.html',
    controller: function ($scope, TagService, $window) {
      $scope.delete = () => {
        TagService.destroy($scope.tag).then(function () {
          $window.location.reload();
        });
      };
    }
  };
});