function FirstCtrl($scope) {
    $scope.notRecommendedMsg = "Not recommended data binding style ";
    $scope.data = {message: "Hello"};
    $scope.view = {type: "panel"};
    $scope.reversedMessage = function (message) {
        if (message !== undefined) {
            return message.split(" ").reverse().join(" ");
        }
    }
}