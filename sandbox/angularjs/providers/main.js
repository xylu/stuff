var myApp = angular.module("myApp", []);

myApp.factory("gameF", function () {
    return {
        title: "StarCraft"
    };
});
myApp.controller("FactoryAppCtrl", function ($scope, gameF) {
    $scope.titleFactory = gameF.title;
});


myApp.provider("game2", function () {
    var type;
    return {
        setType: function (value) {
            type = value;
        },
        $get: function () {
            return  {
                title: type + "Craft"
            };
        }
    };
});
myApp.config(function (game2Provider) {
    game2Provider.setType("War");
});
myApp.controller("ProviderAppCtrl", function ($scope, game2) {
    $scope.titleProvider = game2.title;
});
