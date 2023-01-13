app.service('LikeService', ['$http', function($http){
  const likePost  = (post) => $http.post('http://localhost:3000/posts/' + post.id + '/like')
  .then(function (reponse) {
    return reponse.data;
  });

  const dislikePost = (post) => $http.delete('http://localhost:3000/posts/' + post.id + '/like')
  .then(function (reponse) {
    return reponse.data;
  });

  const likeComment = (postId, commentId) => $http.post('http://localhost:3000/posts/' + postId + '/comments/' + commentId + '/like')
  .then(function (reponse) {
    return reponse.data;
  });

  const dislikeComment = (postId, commentId) => $http.delete('http://localhost:3000/posts/' + postId + '/comments/' + commentId + '/like')
  .then(function (reponse) {
    return reponse.data;
  });

  return {
    likePost: likePost,
    dislikePost: dislikePost,
    likeComment: likeComment,
    dislikeComment: dislikeComment
  }
}])