function ListController($scope) {
    $scope.lista = [
        {firstName: "Joe", lastName: "Doe"},
        {firstName: "Jane", lastName: "Doe"},
        {firstName: "Baby", lastName: "Doe"}
    ]

    $scope.addItem = function(){
        $scope.lista.splice(2,0,{firstName: "Baby Jr", lastName: "Doe"})
    }
};

