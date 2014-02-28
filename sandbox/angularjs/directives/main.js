var myApp = angular.module("myApp", []);
myApp.directive("helloworld", function () {
    return {
        restrict: "E",
        template: "<div>Witaj Swiecie!</div>"
    };
});
myApp.directive("helloworldattr", function () {
    return {
        restrict: "A",
        link: function () {
            alert("Hello World Attribute Directive!");
        }
    };
});


myApp.directive("helloworldclass", function () {
    return {
        restrict: "C",
        link: function (scope, element) {
            element.css('color', 'red');
        }
    };
});

myApp.directive("helloworldcomment", function () {
    return {
        restrict: "M",
        link: function () {
//            alert("Hello World Attribute Comment!");
        }
    };
});

myApp.directive("enter", function () {
    return  function (scope, element, attrs) {
        element.bind("mouseenter", function () {
            console.log("IN!");
            element.addClass(attrs.enter);
        })
    };
});
myApp.directive("leave", function () {
    return  function (scope, element, attrs) {
        element.bind("mouseleave", function () {
            console.log("OUT!");
            element.removeClass(attrs.leave);
        })
    };
});

// DIRECTIVE TO CONTROLLER COMMUNICATION
myApp.directive("callcontroller", function () {
    return  function (scope, element, attrs) {
        element.bind("mouseenter", function () {
            console.log("Call controller!");
            scope.$apply(attrs.callcontroller);
        })
    };
})

//DIRECTIVE TO DIRECTIVE COMMUNICATION
myApp.directive("services", function () {
    return {
        restrict: 'E',
        scope: {},
        controller: function ($scope) {
            $scope.services = [];
            this.addService = function (service) {
                $scope.services.push(service);
            }
        },
        link: function (scope, element) {
            element.addClass("button");
            element.bind("mouseenter", function () {
                console.log(scope.services);
            });

        }
    }
});
myApp.directive("create", function () {
    return {
        require: 'services',
        link: function (scope, element, attrs, myCtrl) {
            myCtrl.addService('create');
        }
    }
});

myApp.directive("update", function () {
    return {
        require: 'services',
        link: function (scope, element, attrs, myCtrl) {
            myCtrl.addService('update');
        }
    }
});


myApp.directive("country", function () {
    return {
        restrict: 'E',
        controller: function () {
            this.makeAnnouncement = function (msg) {
                console.log("Country says:" + msg);
            }
        }

    }
});


myApp.directive("state", function () {
    return {
        restrict: 'E',
        controller: function () {
            this.makeLaw = function (law) {
                console.log("State made law:" + law);
            }
        }


    }
});

myApp.directive("city", function () {
    return {
        restrict: 'E',
        require: ["^country","^state"],
        link: function(scope,element,attrs,cntrls){
            cntrls[0].makeAnnouncement("BUHAHA");
            cntrls[1].makeLaw("Kto nie skacze ten...");
        }
    }
});

myApp.directive("myDearCity", function () {
    return {
        restrict: 'E',
        require: ["^country","^state"],
        link: function(scope,element,attrs,cntrls){
            cntrls[0].makeAnnouncement("BUHAHA2");
        }
    }
});


//TRANSCLUSION
myApp.directive("panel", function () {
    return {
        restrict: 'E',
        transclude: true,
        template: '<div class="panel"> Transcluded element directive <div ng-transclude></div></div>'
    };

});

//COMPONENT
myApp.directive("clock", function () {
    return {
        restrict: 'E',
        scope: {
            timezone: "@"
        },
        template: "<div>12:00pm {{timezone}}</div>"
    };
});

//CONTAINER
myApp.directive("panelcontainer", function () {
    return {
        restrict: "E",
        transclude: true,
        scope: {
            title: "@"
        },
        template: "<div style='border: 3px solid #000000'>" +
            "<div class='alert-box'>{{title}}</div>" +
            "<div ng-transclude></div></div>"
    };
});

function MyController($scope) {
    $scope.ala="ALA ma kota";
    $scope.sayHello = function () {
        console.log("Hello!");
        alert("Hello!");
    };

    $scope.sayBye = function () {
        console.log("Bye!");
        alert("Bye!");
    }

};
