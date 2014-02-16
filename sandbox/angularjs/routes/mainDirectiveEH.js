var myApp = angular.module("myApp", ["ngRoute"]);

myApp.directive("error", function ($rootScope) {
    return {
        restrict: "E",
        template: '<div class="alert-box alert" ng-show="isError">' +
            'Error!!!!!</div>',
        link: function (scope) {
            $rootScope.$on("$routeChangeError",
                function (event, current, previous, rejection) {
                    scope.isError = true;
                });
        }
    }
});

myApp.config(function ($routeProvider) {
    $routeProvider
        .when('/resolveSample', {
            template: "<h1>Resolve sample</h1>",
            controller: "ResolveCtrl",
            //resolve promises evaluated simultaneously
            resolve: {
                loadedData: resolveCtrl.loadData,
                preparedData: resolveCtrl.prepData,
                //comment out to test only successful promises above
                failingOpData: resolveCtrl.simulateFailure
            }
        })
        .otherwise({redirectTo: "/"});
//        .otherwise({template: "This does not exist!"});
});


var resolveCtrl = myApp.controller("ResolveCtrl", function ($scope, $route) {
    console.log("1) Controller constructing...")
    console.log("loadedData.msg: " + $route.current.locals.loadedData.msg);
    console.log("preparedData.msg: " + $route.current.locals.preparedData.msg);
});

resolveCtrl.loadData = function ($q, $timeout) {
    var defer = $q.defer();
    $timeout(function () {
        console.log("0) loading data...")
        defer.resolve({msg: "loadedData"});
    }, 1000);
    return defer.promise

};

resolveCtrl.prepData = function ($q, $timeout) {
    var defer = $q.defer();
    $timeout(function () {
        console.log("0) preparing data...")
        defer.resolve({msg: "preparedData"});
    }, 1000);
    return defer.promise

};

resolveCtrl.simulateFailure = function ($q, $timeout) {
    var defer = $q.defer();
    $timeout(function () {
        console.log("0) simulate failure...")
        defer.reject("network issue");
    }, 1000);
    return defer.promise

};

