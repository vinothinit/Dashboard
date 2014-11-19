(function () {

    var controllerId = 'indexController';
    angular.module('dashboard').controller(controllerId, ['$http', 'chart', indexCtrl]);

    function indexCtrl( $http,chart) {

            var index = this;
            index.date =  new Date();

        function GetTimezoneShort(now) { //now is expected as a Date object
            if(now==null)
                return '';
            var str = now.toString();
            // Split on the first ( character
            var s = str.split("(");
            if (s.length == 2)
            {
            // remove the ending ')'
                var n = s[1].replace(")", "");
                // split on words
                var parts = n.split(" ");
                var abbr = "";
                for(i = 0; i < parts.length; i++)
                {
                    // for each word - get the first letter
                    abbr += parts[i].charAt(0).toUpperCase();
                }
                return abbr;
            }
        }

            var d=new Date();
            index.timezone = GetTimezoneShort(d);
    }

})();
