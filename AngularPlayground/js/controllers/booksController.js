'use strict';
define(['app', 'services/booksService'], function (app) {
    return app.controller('BooksController', function($scope, bookService){
        bookService.get(function (books) {
            $scope.books = books;
        });
    });
});
