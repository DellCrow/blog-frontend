app.service('TagService', ['$http', function($http) {
  const list = () => $http.get('http://localhost:3000/tags')
    .then(function (response) {
      return response.data;
    });

  const get = (id) => $http.get('http://localhost:3000/tags/' + id)
    .then(function (response) {
      return response.data;
  });

  const create = (params) => $http.post('http://localhost:3000/tags', {
      name: params.name,
  }).then(function (reponse) {
      return reponse.data;
  });

  const update = (params) => $http.put('http://localhost:3000/tags/' + params.id, {
    name: params.name,
  }).then(function (reponse) {
    return reponse.data;
  });

  const destroy = (params) => $http.delete('http://localhost:3000/tags/' + params.id);

  return {
    list: list,
    get: get,
    update: update,
    create: create,
    destroy: destroy
  };
}]);