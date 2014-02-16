var myApp = angular.module("myApp", []);


function AppCtrl($scope, $q) {
    var defer = $q.defer();
    defer.promise.then(function (dwarf) {
        alert("Dwarves in Th Hobbit are: " + dwarf);
        return "Dorin";
    })
        .then(function (dwarf) {
            alert(" and  " + dwarf);
            return "Norin";
        }).then(function (dwarf) {
            alert(" and  " + dwarf);
            return "Orin";
        });
    defer.resolve("Thorin");
}
