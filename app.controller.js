app.controller('BlogController', ['$rootScope',  function($rootScope) {
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
  };
  initialize();
}]);
