var myApp = angular.module("myApp", []);

myApp.filter('reverse', function () {
    return function (text) {
        if (text !== undefined) {
            return text.split(" ").reverse().join(" ");
        }
    }
});

myApp.factory("Obsada", function () {
    var Obsada = {}
    Obsada.lista = [
        {
            aktor: "Stanislaw Tym",
            postac: 'Prezes Ochodzki'
        },
        {
            aktor: "Jerzy Turek",
            postac: 'Trener II Kadry'
        },
        {
            aktor: "Roman Wilhelmi",
            postac: 'Stanislaw Aniol'
        }

    ];
    return Obsada;

});

function FirstCtrl($scope) {
    $scope.notRecommendedMsg = "Not recommended data binding style ";
    $scope.data = {message: "Hello"};
    $scope.view = {type: "panel"};

}

function ObsadaCtrl($scope, Obsada) {
    $scope.obsada = Obsada;
}

