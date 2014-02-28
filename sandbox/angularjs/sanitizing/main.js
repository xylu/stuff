var myApp = angular.module('myApp', ['ngSanitize']);

myApp.controller("FirstCtrl", function ($scope) {
    $scope.myUnsafeHTMLContent = '<p style="color:blue">an html' + "<em onmouseover='this.textContent='PWN3D!'>__click here__</em>" + "snippet</p>";
    $scope.contents = 'Text with links: http://angularjs.org/ & mailto:us@there.org';
});