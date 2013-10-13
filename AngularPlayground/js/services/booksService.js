'use strict';

define(['app'], function (app) {
    app.factory('bookService', function($http){
        return {
            get: function (callback) {
                $http({ method: 'GET', url: '/api/books/all' }).success(function (data) {
                    callback(data);
                });
            },
            put : function(book, callback){
                $http({ method: 'POST', url: '/api/books/new', data: book }).success(callback);
            }
        };
    });
});