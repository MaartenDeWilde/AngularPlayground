'use strict';
define(['app', 'services/booksService'], function (app) {
    return app.controller('NewBookController', function ($scope, $location, bookService) {
        $scope.book = { name: '', author: '' };
        $scope.saveBook = function () {
            bookService.put($scope.book, function () {
                $location.path("/books");
            });
            
        }
    });
});
