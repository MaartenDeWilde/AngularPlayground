/*global require*/
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

require(['angular', 'app'], function (angular) {
    angular.bootstrap(document, ['playground']);
});