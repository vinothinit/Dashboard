(function () {

    var controllerId = 'indexController';
    angular.module('dashboard').controller(controllerId, ['$http', 'chart', indexCtrl]);

    function indexCtrl( $http,chart) {

            var index = this;
            index.date =  new Date();

        var now = new Date().toString();
        var TZ = now.indexOf('(') > -1 ?
            now.match(/\([^\)]+\)/)[0].match(/[A-Z]/g).join('') :
            now.match(/[A-Z]{3,4}/)[0];
        if (TZ == "GMT" && /(GMT\W*\d{4})/.test(now)) TZ = RegExp.$1;

        index.timezone = TZ;
    }

})();
