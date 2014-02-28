var myApp = angular.module("myApp", []);

myApp.directive('phone', function () {
    return {
        restrict: 'E',
        scope: {
            number: '@',
            network: '=',
            makeCall: '&'
        },
        templateUrl: 'phone.html',
        link: function (scope) {
            scope.networks = ["Verizon", "AT&T", "Sprint"];
            scope.network = scope.networks[0];
        }
    };
});

myApp.controller('AppController', function ($scope) {
    $scope.leaveVoicemail = function (number, message) {
        alert('Number: ' + number + ' said: ' + message);
    };
});

