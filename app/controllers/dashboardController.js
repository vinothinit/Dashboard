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
            dash.pfizerParticipants = getTotalParticipant(data.studies[0].exited_total, data.studies[0].signed_total, data.studies[0].countersigned_total);
            dash.llyParticipants = getTotalParticipant(data.studies[1].exited_total, data.studies[1].signed_total, data.studies[1].countersigned_total);
            dash.gskParticipants = getTotalParticipant(data.studies[2].exited_total, data.studies[2].signed_total, data.studies[2].countersigned_total);
            getMap(data);


        }).error(function (data, status, headers, config) {
            // log error
            alert("Json not found")
        });
        //sum of total Participants
        function getTotalParticipant(){
            var i, sum = 0;
            for (var i = 0; i < arguments.length; i++) {
                sum += arguments[i];
            }
            return sum;
        }

        function getMap(datas) {
            /*var data =[ {
                code: "SE"

            }, {
                code: "CH"

            }, {
                code: "SY"

            }, {
                code: "TJ"

            }, {
                code: "IN"

            }];*/
            var data = [];
            $.each(datas.studies[2].site_locations, function (value) {
                data.push({
                    code: value
                });
            });
            var mapData = Highcharts.geojson(Highcharts.maps['custom/world']);

            $('#container').highcharts('Map', {
                colors: ["#FFFFFF"],
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
                symbol: { // button symbol options
                    shape: 'circle', // shape, taken from Highcharts.symbols
                    size: 12,
                    style: {
                        'stroke-width':  2,
                        'stroke': 'black',
                        fill: 'red',
                        zIndex: 121
                    }
                },
                subtitle: {
                    text: ''
                },
                plotOptions: {
                    series: {
                        marker: {
                            fillColor: 'white',
                            lineWidth: 3,
                            lineColor: null // inherit from series
                        }
                    }
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
                    nullColor: 'rgb(40,93,110)',
                    enableMouseTracking: false,
                    borderColor: 'rgb(40,93,110)'
                }, {
                    type: 'mapbubble',
                    mapData: mapData,
                    joinBy: ['iso-a2', 'code'],
                    data: data,
                    minSize: 8,
                    maxSize: 8,
                    tooltip: {
                        enable: false
                    }
                }]
            });

        }
    }


})();