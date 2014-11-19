(function () {

    var controllerId = 'indexController';
    angular.module('dashboard').controller(controllerId, ['$http', 'chart', indexCtrl]);

    function indexCtrl( $http,chart) {

            var index = this;
            index.date =  moment().format('MMMM Do YYYY, h:mm:ss a');

        
    }

})();
