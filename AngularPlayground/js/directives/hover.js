define(['app'], function (app) {
    app.directive("bookHover", function () {
        return function (scope, element, attrs) {
            element.bind("mouseenter", function () {
                element.css("background", "#eee");
            });
            element.bind("mouseleave", function () {
                element.css("background", "none");
            });
        }
    });
});