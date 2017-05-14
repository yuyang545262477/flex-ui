(function (angular) {
    "use strict";
    angular.module('flex_ui')
        .factory('uiService', uiServiceFactory);

    function uiServiceFactory() {
        return{
            width:setWidth,
            height:setHeight
        };
        function setWidth(widthSize,element) {
            element.css({
                'width':widthSize+'px'
            });
        }

        function setHeight(heightSize, element) {
            element.css({
                'height':heightSize+'px'
            })
        }
    }

})(angular);