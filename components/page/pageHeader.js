app.directive('pageHeader', function () {
  return {
    restrict: 'E',
    templateUrl: 'views/components/page/page-header.html',
    controller: function ($scope, $rootScope, $location) {
      $scope.logged = () => {
        return window.localStorage.getItem('token');
      };

      $scope.logoff = () => {
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('name');
        window.localStorage.removeItem('id');
        window.localStorage.removeItem('email');
        window.localStorage.removeItem('created_at');
        $rootScope.currentUser = {}
        $location.path('/');
      };
    }
  };
});