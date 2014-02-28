var myApp = angular.module("myApp", []);
myApp.directive("helloWorld", function () {
    return {
        restrict: "E",
        transclude: true,
        scope: {
            title: "@"
        },
        templateUrl: "helloWorld.html",
        link: function (scope) {
            scope.isContentVisible = false;
            scope.toggleContent = function () {
                scope.isContentVisible = !scope.isContentVisible;
            };
        }
    }
});

