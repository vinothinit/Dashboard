 
 angular.module('dashboard', ['ngRoute','highcharts-ng']).config(function($routeProvider){
    	$routeProvider
    		.when('/',{
				templateUrl:'/dashboard-app/app/views/dashboard.html',
				controller:'dashboardController'

			});
    	
    	 
    });
