 
 angular.module('dashboard', ['ngRoute','highcharts-ng']).config(function($routeProvider){
    	$routeProvider
    		.when('/',{
				templateUrl:'/Dashboard/app/views/dashboard.html',
				controller:'dashboardController'

			});
    	
    	 
    });
