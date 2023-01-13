app.service('CommentService', ['$http', function($http) {
  const list = (post) => $http.get('http://localhost:3000/posts/' + post.id + '/comments')
    .then(function (response) {
      return response.data;
    });

  const get = (postId, commentId) => $http.get('http://localhost:3000/posts/' + postId + '/comments/' + commentId)
  .then(function (response) {
    return response.data;
  });

  const create = (postId, params) => $http.post('http://localhost:3000/posts/' + postId + '/comments', {
      comment: {
        text: params.text
      }
  });

  const update = (postId, commentId, params) => $http.put('http://localhost:3000/posts/' + postId + '/comments/' + commentId, {
    comment: {
      text: params.text
    }
  });

  const destroy = (postId, params) => $http.delete('http://localhost:3000/posts/' + postId + '/comments/' + params.id)

  const like = (postId, commentId) => $http.post('http://localhost:3000/posts/' + postId + '/comments/' + commentId + '/like')
  .then(function (reponse) {
    return reponse.data;
  });

  const dislike = (postId, commentId) => $http.delete('http://localhost:3000/posts/'+ postId +'/comments/' + commentId + '/like')
  .then(function (reponse) {
    return reponse.data;
  });

  return {
    list: list,
    get: get,
    create: create,
    update: update,
    like: like,
    dislike: dislike,
    destroy: destroy
  };
}]);