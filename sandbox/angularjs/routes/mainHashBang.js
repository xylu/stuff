var myApp = angular.module("myApp", ['ngRoute']);


myApp.config(['$routeProvider','$locationProvider',
    function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/suggestions', {
                template: '<h3>Suggestions list (HASHBANG MODE : T , HTML5: F)</h3> <ol><li ng-repeat="s in suggestions"> <a ng-href="#!/suggestion/{{s.id}}"> {{s.name}}</a></li> </ol>',
                controller: 'ListCtrl'
            }).
            when('/suggestion/:suggestionId', {
                template: '<h3>Suggestions #{{name}}</h3> ',
                controller: 'SuggestionCtrl'
            })

            .otherwise({redirectTo: '/suggestions/'});
        $locationProvider
            .html5Mode(false)
            //default :''
            .hashPrefix('!');
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



