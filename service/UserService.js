app.service('UserService', ['$http', '$rootScope', function($http, $rootScope) {
  const update = () => $http.put('http://localhost:3000/user', {
    user: {
      name: $rootScope.currentUser.name,
      email: $rootScope.currentUser.email,
      password: $rootScope.currentUser.password,
    }
  })
    .then(function (response) {
      return response.data;
  });

  const login = (params) => $http.post("http://localhost:3000/login", {
    id: params.id,
    email: params.username,
    password: params.password})
    .then(function(response) {
      return response.data;
    })
    .catch(function(reponse) {
      return reponse.data;
    });

    const register = (params) => $http.post("http://localhost:3000/user", {
      user: {
        name: params.username,
        email: params.email,
        password: params.password
      }
    }).then(function(response) {
      return response.data;
    })
    .catch(function(reponse) {
      return reponse.data;
    });

    const destroy = () => $http.delete('http://localhost:3000/user');

  return {
    update: update,
    login: login,
    register: register,
    destroy: destroy
  };
}]);