(function () {

    var controllerId = 'dashboardController';
    angular.module('dashboard').controller(controllerId, ['$http', 'chart', dashboardChart]);

    function dashboardChart( $http,chart) {

        var dash = this;
        dash.dashboard = {};


        $http.get('app/models/dash.json').success(function (data) {
            //Store the Json values to modal
            dash.dashboard = data;
            dash.pfizer = chart.getChart(data.studies[0].exited_total, data.studies[0].signed_total, data.studies[0].countersigned_total);
            dash.llyChart = chart.getChart(data.studies[1].exited_total, data.studies[1].signed_total, data.studies[1].countersigned_total);
            dash.gskChart = chart.getChart(data.studies[2].exited_total, data.studies[2].signed_total, data.studies[2].countersigned_total);
            dash.demoGraphgskChart = chart.getDemoGraphicsChart(data.studies[2].chart_data.demographics);
            dash.totalTimeGsk = chart.totalTimeGsk(data.studies[2].chart_data.time);
            dash.knowledgeReview = chart.knowledgeReview(data.studies[2].chart_data.quiz);

            getMap(data);


        }).error(function (data, status, headers, config) {
            // log error
            alert("Json not found")
        });


        function getMap(data) {
            var data =[ {
                code: "SE",
                z: 9380
            }, {
                code: "CH",
                z: 7664
            }, {
                code: "SY",
                z: 20411
            }, {
                code: "TJ",
                z: 6879
            }, {
                code: "TZ",
                z: 44841
            }, {
                code: "TH",
                z: 69122
            }, {
                code: "TL",
                z: 1124
            }, {
                code: "TG",
                z: 6028
            }];

           /* var data = data.studies[2].site_locations;
            for (code in data){
                alert(code)
            }*/

            var mapData = Highcharts.geojson(Highcharts.maps['custom/world']);

            $('#container').highcharts('Map', {
                chart: {
                    borderWidth: null,
                    plotBackgroundColor: '#292d2f',
                    plotBorderWidth: null,
                    plotShadow: false,
                    backgroundColor: '#292d2f'
                },
                credits: {
                    enabled: false
                },
                title: {
                    text: ''
                },

                subtitle: {
                    text: ''
                },

                legend: {
                    enabled: false
                },

                mapNavigation: {
                    enabled: true,
                    buttonOptions: {
                        verticalAlign: 'bottom'
                    }
                },

                series: [{
                    name: 'Countries',
                    mapData: mapData,
                    nullColor: '#32576A',
                    enableMouseTracking: false
                }, {
                    type: 'mapbubble',
                    mapData: mapData,
                    name: 'Population 2010',
                    joinBy: ['iso-a2', 'code'],
                    data: data,
                    minSize: 4,
                    maxSize: '12%',
                    tooltip: {
                        enable: false
                    }
                }]
            });

        }
    }


})();