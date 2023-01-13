app.controller('UserController', UserController);

UserController.$inject = [
  '$scope',
  'UserService',
  '$location',
  '$rootScope',
  'type'
];

function UserController($scope, UserService, $location, $rootScope, type) {
  $scope.login = {
    username: null,
    password: null
  };

  $scope.register = {
    username: null,
    email: null,
    password: null
  };

  $rootScope.currentUser = {};

  $scope.logged = () => {
    return window.localStorage.getItem('token');
  };

  $scope.update = () => {
    UserService.update()
      .then(function (response) {
        if (response) {
          $location.path('/user');
          window.localStorage.removeItem('token');
          window.localStorage.removeItem('name');
          window.localStorage.removeItem('id');
          window.localStorage.removeItem('email');
          window.localStorage.removeItem('created_at');
          $rootScope.currentUser = {};
          $location.path('');
        } else {
          $scope.user = {};
        };
    });
  };

  $scope.updatePassword = () => {
    UserService.update()
      .then(function (response) {
        if (response) {
          $location.path('/user');
          window.localStorage.removeItem('token');
          window.localStorage.removeItem('name');
          window.localStorage.removeItem('id');
          window.localStorage.removeItem('email');
          window.localStorage.removeItem('created_at');
          $rootScope.currentUser = {};
          $location.path('');
        } else {
          $scope.user = {};
        };
      })
  }

  $scope.submitRegister = () => {
    UserService.register($scope.register).then(function (response) {
      if (response.error) {
        $scope.message = response.error;
      } else {
        window.localStorage.setItem('token', response.token);
        window.localStorage.setItem('name', response.name);
        window.localStorage.setItem('id', response.id);
        window.localStorage.setItem('email', response.email);
        window.localStorage.setItem('created_at', response.created_at);
        $rootScope.currentUser = {
          id: response.id,
          name: response.name,
          email: response.email,
          created_at: response.created_at
        };
        $location.path('/user');
      };
    });
  };

  $scope.submitLogin = () => {
    UserService.login($scope.login).then(function (response) {
      if (response.error) {
        $scope.message = response.error;
      } else {
        window.localStorage.setItem('token', response.token);
        window.localStorage.setItem('name', response.name);
        window.localStorage.setItem('id', response.id);
        window.localStorage.setItem('email', response.email);
        window.localStorage.setItem('created_at', response.created_at);
        $rootScope.currentUser = {
          id: response.id,
          name: response.name,
          email: response.email,
          created_at: response.created_at
        };
        $location.path('/posts');
      };
    });
  };

  const initialize = () => {
    let token = window.localStorage.getItem('token');
    if (token) {
      $rootScope.currentUser = {
        id: window.localStorage.getItem('id'),
        email: window.localStorage.getItem('email'),
        name: window.localStorage.getItem('name'),
        created_at: window.localStorage.getItem('created_at')
      };
    };
    if (type === 'login' && token || type === 'register' && token) {
      $location.path('/posts');
    };
  };

  initialize();
};