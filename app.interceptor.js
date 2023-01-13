app.factory('Interceptor', Interceptor);

Interceptor.$inject = ['$q'];

function Interceptor($q) {
  return {
    request: function (config) {
      let token = window.localStorage.getItem('token');
      if (token) {
        config.headers['Authorization'] = 'Bearer ' + token;
      };
      return config;
    },
    reponseError:  function(err){
      return $q.reject(err);
    }
  };
};