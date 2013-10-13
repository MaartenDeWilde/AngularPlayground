define(['app','controllers/booksController', 'controllers/newBookController'], function (app, c1,c2) {
    app.config(['$routeProvider',
      function ($routeProvider) {
          $routeProvider.
            when('/books', {
                templateUrl: 'partials/books.html',
                controller: 'BooksController'
            }).
            when('/books/add', {
                templateUrl: 'partials/create.html',
                controller: 'NewBookController'
            }).
            otherwise({
                redirectTo: '/books'
            });
      }]);
});