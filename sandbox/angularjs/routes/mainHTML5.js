var myApp = angular.module("myApp", ['ngRoute']);


myApp.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                template: '<h3>Suggestions list (HTML5 DOES NOT WORK WITHOUT SERVER_SIDE_CHANGE)</h3> <ol><li ng-repeat="s in suggestions"> <a ng-href="/suggestion/{{s.id}}"> {{s.name}}</a></li> </ol>',
                controller: 'ListCtrl'
            }).
            when('/suggestion/:suggestionId', {
                template: '<h3>Suggestions #{{name}}</h3> ',
                controller: 'SuggestionCtrl'
            })

            .otherwise({redirectTo: '/'});
        $locationProvider.html5Mode(true).hashPrefix("!");
    }
]);

function ListCtrl($scope) {
    $scope.suggestions = [
        {name: 'suggestions#1', id: 1},
        {name: 'suggestions#2', id: 2},
        {name: 'suggestions#3', id: 3}
    ]

};

function SuggestionCtrl($scope, $routeParams) {
    console.log($routeParams);
    $scope.name = $routeParams.suggestionId;

}



