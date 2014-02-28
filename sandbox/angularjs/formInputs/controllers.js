function StartupController($scope) {
    $scope.data = {startingEstimation: 0};
    $scope.estimate = function () {
        $scope.data.recommendedEstimation = 10 * $scope.data.startingEstimation;
    };
};

function StartupControllerWatch($scope) {
    $scope.data = {startingEstimation: 0};
    var estimate2 = function () {
        $scope.data.recommendedEstimation = 20 * $scope.data.startingEstimation;
    };
    $scope.requestFunding = function () {
        window.alert("Rejected funding!");
    };
    $scope.clean = function () {
        $scope.data.startingEstimation = 0;
        $scope.data.recommendedEstimation = 0;
    };


    $scope.$watch('data.startingEstimation', estimate2);
};

function CartController($scope) {
    $scope.bill = {};

    $scope.items = [
        {title: 'Paint pots', quantity: 8, price: 3.95},
        {title: 'Polka dots', quantity: 17, price: 12.95},
        {title: 'Pebbles', quantity: 5, price: 6.95}
    ];

    $scope.totalCart = function () {
        var total = 0;
        for (var i = 0, len = $scope.items.length; i < len; i++) {
            total = total + $scope.items[i].price * $scope.items[i].quantity;
        }

        return total;
    }

    $scope.subtotal = function () {
        return $scope.totalCart() - $scope.bill.discount;
    };

    function calculateDiscount(newValue, oldValue, scope) {
        $scope.bill.discount = newValue > 100 ? 10 : 0;
    }

    $scope.$watch($scope.totalCart, calculateDiscount);
};


function CartControllerBetterPerformance($scope) {
    $scope.bill = {};

    $scope.items = [
        {title: 'Paint pots', quantity: 8, price: 3.95},
        {title: 'Polka dots', quantity: 17, price: 12.95},
        {title: 'Pebbles', quantity: 5, price: 6.95}
    ];

    var calculateTotals = function () {
        var total = 0;
        for (var i = 0, len = $scope.items.length; i < len; i++) {
            total = total + $scope.items[i].price * $scope.items[i].quantity;
        }
        $scope.bill.total = total;
        $scope.bill.discount = total > 100 ? 10 : 0;
        $scope.bill.subtotal = total - $scope.bill.discount;
    };

    $scope.$watch('items', calculateTotals, true);
};

function ValidationController($scope) {
    $scope.master = {};

    $scope.update = function (user) {
        $scope.master = angular.copy(user);
    };

    $scope.reset = function () {
        $scope.user = angular.copy($scope.master);
    };

    $scope.isUnchanged = function (user) {
        return angular.equals(user, $scope.master);
    };

    $scope.reset();
};


