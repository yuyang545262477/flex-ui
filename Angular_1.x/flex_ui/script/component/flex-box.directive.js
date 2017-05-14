(function (angular) {
    "use strict";
    angular.module('flex_ui')
        .directive('flexBox', flexBoxDirective);
    flexBoxDirective.$inject=['uiService'];
    function flexBoxDirective(uiService) {
        return {
            template:'<div class="flexBox" ng-transclude></div>',
            transclude:true,
            restrict: "E",
            compile: compileFun,
            replace:true
        };

        function compileFun( elem, attrs) {
            if(angular.isDefined(attrs.width)&&!isNaN(attrs.width)) uiService.width(attrs.width,elem);
            if(angular.isDefined(attrs.height) &&!isNaN(attrs.height)) uiService.height(attrs.height,elem);
        }
    }

})(angular);