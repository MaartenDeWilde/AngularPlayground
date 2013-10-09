﻿/*global require*/
'use strict';

require.config({
    paths: {
        angular: '../components/angular/angular'
    },
    shim: {
        angular: {
            exports: 'angular'
        }
    }
});

require(['angular', 'app', 'controllers/booksController'], function (angular) {
    angular.bootstrap(document, ['playground']);
});