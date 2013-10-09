'use strict';

define(['app'], function (app) {
    app.factory('bookService', function($http){
        return {
            get: function(){
                return [ {name:"Awesome book"}, {name:'IT book'}];
            },
            put : function(){

            }
        };
    });
});