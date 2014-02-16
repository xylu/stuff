var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "app.html",
            controller: "AppCtrl"
        })
        .when("/pizza", {
            template: "Pycha!"
        })
        .when("/map/:country/:city", {
            templateUrl: "app.html",
            controller: "AppCtrl2"
        })
        .when("/pizza/kinds", {
            redirectTo: function (routeParams, path, search) {
                console.error("REDIRECT");
                console.log(routeParams);
                console.log(path);
                console.log(search);
                return "/pizza/" + search.kind;

            }
        }).when("/pizza/italiana", {
            template: "Mamma mia!"
        }).when('/resolveSample', {
            template: "<h1>Resolve sample</h1>",
            controller: "ResolveCtrl",
            //resolve promises evaluated simultaneously
            resolve: {
                loadedData: resolveCtrl.loadData,
                preparedData: resolveCtrl.prepData,
                //comment out to test only successful promises above
//                failingOpData: resolveCtrl.simulateFailure
            }
        })
        .otherwise({redirectTo: "/"});
//        .otherwise({template: "This does not exist!"});
});

function AppCtrl($scope) {
    $scope.model = { message: "app route!"};
}

function AppCtrl2($scope, $routeParams) {
    $scope.model = { message: $routeParams.country + " ->" + $routeParams.city};
}


var resolveCtrl = myApp.controller("ResolveCtrl", function ($scope, loadedData, preparedData, $route) {
    console.log("1) Controller constructing...")
    console.log("loadedData.msg: " + loadedData.msg);
//    console.log("loadedData.msg: " + $route.current.locals.loadedData.msg);
//    console.log("preparedData.msg: " + $route.current.locals.preparedData.msg);
    console.log("preparedData.msg: " + preparedData.msg);
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


function ErrorHandlerCtrl($rootScope) {
    $rootScope.$on("$routeChangeError", function (event, current, previous, rejection) {
        console.error("switch " + previous + " =>" + current.originalPath + " failed due to " + rejection);
    });

};