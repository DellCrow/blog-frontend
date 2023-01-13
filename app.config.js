app.config(function($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/user/login.html',
      controller: 'UserController',
      resolve: {
        type: () => {
          return 'login';
        }
      }
    })
    .state('register', {
      url: '/register',
      templateUrl: 'views/user/register.html',
      controller: 'UserController',
      resolve: {
        type: () => {
          return 'register';
        }
      }
    })
    .state('posts-new', {
      url: '/posts/new',
      templateUrl: 'views/posts/form.html',
      controller: 'PostsController',
      resolve: {
        type: () => {
          return 'create';
        }
      }
    })
    .state('posts', {
      url: '/posts',
      templateUrl: 'views/posts/index.html',
      controller: 'PostsController',
      resolve: {
        type: () => {
          return 'index';
        }
      }
    })
    .state('posts-id',{
      url: '/posts/:id',
      templateUrl: 'views/posts/show.html',
      controller: 'PostsController',
      resolve: {
        type: () => {
          return 'show';
        }
      }
    })
    .state('posts-id-edit', {
      url: '/posts/:id/edit',
      templateUrl: 'views/posts/form.html',
      controller: 'PostsController',
      resolve: {
        type: () => {
          return 'edit';
        }
      }
    })
    .state('tags', {
      url: '/tags',
      templateUrl: 'views/tags/index.html',
      controller: 'TagsController',
      resolve: {
        type: () => {
          return 'index';
        }
      }
    })
    .state('tags-new', {
      url: '/tags/new',
      templateUrl: 'views/tags/form.html',
      controller: 'TagsController',
      resolve: {
        type: () => {
          return 'create';
        }
      }
    })
    .state('tags-id', {
      url: '/tags/:id',
      templateUrl: 'views/tags/form.html',
      controller: 'TagsController',
      resolve: {
        type: () => {
          return 'edit';
        }
      }
    })
    .state('user', {
      url: '/user',
      templateUrl: 'views/user/show.html',
      controller: 'UserController',
      resolve: {
        type: () => {
          return 'show';
        }
      }
    })
    .state('user-edit', {
      url: '/user/edit',
      templateUrl: 'views/user/form.html',
      controller: 'UserController',
      resolve: {
        type: () => {
          return 'edit';
        }
      }
    })
    .state('user-password', {
      url: '/user/password',
      templateUrl: 'views/user/password-form.html',
      controller: 'UserController',
      resolve: {
        type: () => {
          return 'password';
        }
      }
    })
    .state('posts-id-comments', {
      url: '/posts/:id/comments',
      templateUrl: 'views/comments/index.html',
      controller: 'CommentsController',
      resolve: {
        type: () => {
          return 'index';
        }
      }
    })
    .state('posts-id-comments-new', {
      url: '/posts/:id/comments/new',
      templateUrl: 'views/comments/form.html',
      controller: 'CommentsController',
      resolve: {
        type: () => {
          return 'create';
        }
      }
    })
    .state('posts-idcomments-comment_id', {
      url: '/posts/:id/comments/:comment_id',
      templateUrl: 'views/comments/show.html',
      controller: 'CommentsController',
      resolve: {
        type: () => {
          return 'show';
        }
      }
    })
    .state('posts-id-comments-comment_id-edit', {
      url: '/posts/:id/comments/:comment_id/edit',
      templateUrl: 'views/comments/form.html',
      controller: 'CommentsController',
      resolve: {
        type: () => {
          return 'edit';
        }
      }
    });
});

app.config(['$httpProvider', Interceptor]);

function Interceptor($httpProvider) {
  $httpProvider.interceptors.push('Interceptor');
};