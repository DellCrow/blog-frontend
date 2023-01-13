app.service('PostService', ['$http', function($http) {
  const list = $http.get('http://localhost:3000/posts')
    .then(function (response) {
      return response.data;
    });

  const get = (id) => $http.get('http://localhost:3000/posts/' + id)
    .then(function (response) {
      return response.data;
  });

  const create = (params) => $http.post('http://localhost:3000/posts', {
    title: params.title,
    description: params.description
  }).then(function (reponse) {
      return reponse.data;
  });

  const update = (params) => $http.put('http://localhost:3000/posts/' + params.id, {
    title: params.title,
    description: params.description
  }).then(function (reponse) {
    return reponse.data;
  });

  const destroy = (params) => $http.delete('http://localhost:3000/posts/' + params.id);

  const like = (post) => $http.post('http://localhost:3000/posts/' + post.id + '/like')
  .then(function (reponse) {
    return reponse.data;
  });

  const dislike = (post) => $http.delete('http://localhost:3000/posts/'+ post.id +'/like')
  .then(function (reponse) {
    return reponse.data;
  });

  const getPostTags = (post) => $http.get('http://localhost:3000/posts/' + post.id + '/tags')
  .then(function (reponse) {
    return reponse.data;
  });

  const linkTag = (post, params) => $http.post('http://localhost:3000/posts/' + post.id + '/tag', {
    post: {
      tag_id: params.id
    }
  });

  const unlinkTag = (post, tag) => $http.delete('http://localhost:3000/posts/' + post.id + '/tag/' + tag.id)
    .then(function (reponse) {
      return reponse.data;
    });


  return {
    list: list,
    get: get,
    update: update,
    create: create,
    like: like,
    dislike: dislike,
    getPostTags: getPostTags,
    unlinkTag: unlinkTag,
    linkTag: linkTag,
    destroy: destroy
  };
}]);