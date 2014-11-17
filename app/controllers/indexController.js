(function () {

    var controllerId = 'indexController';
    angular.module('dashboard').controller(controllerId, ['$http', 'chart', indexCtrl]);

    function indexCtrl( $http,chart) {

            var index = this;
            index.date =  new Date();
    }

})();
