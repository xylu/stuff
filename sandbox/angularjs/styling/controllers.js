function HeaderController($scope) {
    $scope.messageText = "Warning";
    $scope.isWarning = true;
    $scope.isError = false;

    $scope.showWarning = function () {
        $scope.messageText = "Warning";
        $scope.isWarning = true;
        $scope.isError = false;

    };

    $scope.showError = function () {
        $scope.messageText = "Error!";
        $scope.isWarning = false;
        $scope.isError = true;

    };

};

