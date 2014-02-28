var myApp = angular.module("myApp", []);

myApp.directive("drink", function () {
    return {
        scope: {
            /*
             it's a shortcut for
             link : function (scope,element,attrs){
             scope.flavor=attrs.flavor
             }
             */
            flavor: "@"
        },
        template: "<div>{{flavor}}</div>"
    }
});

myApp.directive("drink2", function () {
    return {
        scope: {
            flavor: "="
        },
        template: "<div>{{flavor}}</div>"
    }
})
myApp.directive("drinkDirective", function () {
    return {
        scope: {
            flavor: "="
        },
        template: '<input type="text" ng-model="flavor">'
    }
})

myApp.directive('child', function () {
    return {
        restrict: 'E',
        scope: { done: '&'},
//        The {choreInView:chore} or {nameInView : nameInModel} syntax maps the chore from the model we made in the to be passed to the logChore function when we said 'done="logChore(chore)"' (in the kid directive)
        template: '<input type="text" ng-model="chore"/> <div class="button" ng-click="done({choreInView:chore})">Done</div>{{chore}}'

    }

});


function DrinkCtrl($scope) {
    $scope.ctrlFlavor = 'lemon';

};

function ChoreCtrl($scope) {
    $scope.choreDone = function (chore) {
        alert(chore + " done!");
    }
}