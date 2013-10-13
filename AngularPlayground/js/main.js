/*global require*/
'use strict';

require.config({
    paths: {
        angular: '../components/angular/angular',
        angularroute : '../components/angular-route/angular-route'
    },
    shim: {
        angular: {
            exports: 'angular'
        },
        angularroute: {
            deps: ['angular']
        }
    }
});

require(['angular', 'app', 'router'], function (angular) {
    angular.bootstrap(document, ['playground']);
});