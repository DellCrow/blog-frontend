app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/user/login.html',
      controller: 'UserController',
      resolve: {
        type: () => {
          return 'login';
        }
      }
    })
    .when('/register', {
      templateUrl: 'views/user/register.html',
      controller: 'UserController',
      resolve: {
        type: () => {
          return 'register';
        }
      }
    })
    .when('/posts/new', {
      templateUrl: 'views/posts/form.html',
      controller: 'PostsController',
      resolve: {
        type: () => {
          return 'create';
        }
      }
    })
    .when('/posts', {
      templateUrl: 'views/posts/index.html',
      controller: 'PostsController',
      resolve: {
        type: () => {
          return 'index';
        }
      }
    })
    .when('/posts/:id',{
      templateUrl: 'views/posts/show.html',
      controller: 'PostsController',
      resolve: {
        type: () => {
          return 'show';
        }
      }
    })
    .when('/posts/:id/edit', {
      templateUrl: 'views/posts/form.html',
      controller: 'PostsController',
      resolve: {
        type: () => {
          return 'edit';
        }
      }
    })
    .when('/tags', {
      templateUrl: 'views/tags/index.html',
      controller: 'TagsController',
      resolve: {
        type: () => {
          return 'index';
        }
      }
    })
    .when('/tags/new', {
      templateUrl: 'views/tags/form.html',
      controller: 'TagsController',
      resolve: {
        type: () => {
          return 'create';
        }
      }
    })
    .when('/tags/:id', {
      templateUrl: 'views/tags/form.html',
      controller: 'TagsController',
      resolve: {
        type: () => {
          return 'edit';
        }
      }
    })
    .when('/user/', {
      templateUrl: 'views/user/show.html',
      controller: 'UserController',
      resolve: {
        type: () => {
          return 'show';
        }
      }
    })
    .when('/user/edit', {
      templateUrl: 'views/user/form.html',
      controller: 'UserController',
      resolve: {
        type: () => {
          return 'edit';
        }
      }
    })
    .when('/posts/:id/comments', {
      templateUrl: 'views/comments/index.html',
      controller: 'CommentsController',
      resolve: {
        type: () => {
          return 'index';
        }
      }
    })
    .when('/posts/:id/comments/new', {
      templateUrl: 'views/comments/form.html',
      controller: 'CommentsController',
      resolve: {
        type: () => {
          return 'create';
        }
      }
    })
    .when('/posts/:id/comments/:comment_id', {
      templateUrl: 'views/comments/show.html',
      controller: 'CommentsController',
      resolve: {
        type: () => {
          return 'show';
        }
      }
    })
    .when('/posts/:id/comments/:comment_id/edit', {
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