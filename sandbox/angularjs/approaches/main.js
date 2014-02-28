
var myApp = angular.module("myApp", []);


function MyController($scope) {
    this.sayHello = function () {
        console.log("Hello!");
        alert("Hello!");
    };
    return $scope.MyController = this;


};

function FooController() {
    this.sayHello = function () {
        console.log("Hello!");
        alert("Hello!");
    };
    this.label="Push me!"


}



