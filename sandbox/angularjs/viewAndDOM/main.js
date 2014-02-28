var myApp = angular.module("myApp", []);

myApp.config(function($logProvider){
    //disable debug logs
    $logProvider.debugEnabled(false);
});

myApp.run(function($rootScope, $log){
    //expose $log
    $rootScope.$log = $log;
});


myApp.directive("dumbPassword", function () {
    var password = angular.element('<div>{{model.input}}</div>');
    var link = function (scope) {
        scope.$watch('model.input', function (value) {
            if (value === 'password') {
                password.toggleClass('alert-box alert');
            }
        });
    }
    return {
        restrict: 'E',
        replace: true,
        template: '<div>\n    <input type="text" ng-model="model.input"><div>',
        compile: function (tElem) {
            tElem.append(password);
            return link;
        }
    };

});



