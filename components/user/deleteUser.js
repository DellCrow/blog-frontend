app.directive('deleteUser', function () {
  return {
    restrict: 'E',
    scope: {
      user: '='
    },
    templateUrl: 'views/components/user/delete.html',
    controller: function ($scope, UserService, $location, $rootScope) {
      if ($scope.user) {
        $scope.delete = () => {
          UserService.destroy().then(function() {
            window.localStorage.removeItem('token');
            window.localStorage.removeItem('name');
            window.localStorage.removeItem('id');
            window.localStorage.removeItem('email');
            window.localStorage.removeItem('created_at');
            $rootScope.currentUser = {};
            $location.path('/');
          });
        };
      };
    }
  };
});