(function () {

    var controllerId = 'indexController';
    angular.module('dashboard').controller(controllerId, ['$http', 'chart', indexCtrl]);

    function indexCtrl( $http,chart) {

            var index = this;
            index.date =  new Date();

        function GetTimezoneShort() { //now is expected as a Date object


            var d= new Date();
            var offs= d.getTimezoneOffset();
            var str= offs> 0? '+': '';
            str+= offs%60? offs+' minutes, ': (offs/60)+' hours, ';
            var s= d.toString();
            var tz= /(\: *\d{2} *)([a-z]+)([\-\+]\d+)? *\(?([a-z ]+)?/i.exec(s) || [];
            if(!tz[3]) tz[4]= tz[2];
            if(offs==0) return tz[4] || ' GMT';
            var timezone =  ' '+ (tz[4] ||  '');

            var parts = timezone.split(" ");
            var abbr = "";
            for(var i = 1; i < parts.length; i++)
            {
                // for each word - get the first letter
                abbr += parts[i].charAt(0).toUpperCase();
            }
            return timezone;
        }

            index.timezone = GetTimezoneShort();
    }

})();
