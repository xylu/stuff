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



//NON ISOLATED SCOPES:
// - FALSE (DEFAULT -> existing scope)
// - TRUE (creates new scope that inherits content from parent scope)
myApp.directive("country", function () {
    return {
        restrict: 'E',
        controller: function ($scope) {
            $scope.a = "AAA"
            this.makeAnnouncement = function (msg) {
                console.log("Country says:" + msg);
            }
        }

    }
});


myApp.directive("state", function () {
    return {
        scope: true,
        restrict: 'E',
        controller: function ($scope) {
            $scope.b = "BBB";
            this.makeLaw = function (law) {
                console.log("[State] State made law:" + law + " variable a: "  + $scope.a);
            }
        }


    }
});

myApp.directive("city", function () {
    return {
        restrict: 'E',
        require: ["^country","^state"],
        controller: function($scope) {
            console.log("[City] a: " + $scope.a + " b: "+ $scope.b);
        },
        link: function(scope,element,attrs,cntrls){
            cntrls[0].makeAnnouncement("BUHAHA");
            cntrls[1].makeLaw("Kto nie skacze ten...");
        }
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