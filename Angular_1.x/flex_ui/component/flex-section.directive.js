(function (angular) {
    "use strict";
    angular.module('flex_ui')
        .directive('flexSection', flexSectionDirective);
    flexSectionDirective.$inject =['uiService'];
    function flexSectionDirective(uiService) {
        return {
            template:'<section class="flexSection" ng-transclude></section>',
            restrict: "E",
            compile: compileFun,
            transclude:true,
            replace:true
        };
        function compileFun(elem, attrs) {
            // check out width || height
            if(angular.isDefined(attrs.width)&& !isNaN(attrs.width)) uiService.width(attrs.width,elem);
            if(angular.isDefined(attrs.height)&& !isNaN(attrs.height)) uiService.height(attrs.height,elem);
        }
    }

})(angular);