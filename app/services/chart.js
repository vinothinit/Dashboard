(function() {

    var serviceId = 'chart';
    angular.module('dashboard').factory(serviceId, [chartFactory]);

    function chartFactory() {

        var provider = {
            getChart: getChart,
            getDemoGraphicsChart: getDemoGraphicsChart,
            totalTimeGsk: totalTimeGsk,
            knowledgeReview : knowledgeReview
        };

        return provider;

        function getChart(exited_total, signed_total, countersigned_total) {
            var chart = '';
            return chart = {
                options: {
                    chart: {
                        type: 'pie',
                        plotBackgroundColor: '#292d2f',
                        plotBorderWidth: null,
                        plotShadow: false,
                        backgroundColor: '#292d2f'

                    },
                    plotOptions: {
                        pie: {
                            borderWidth: 0,
                            dataLabels: {
                                enabled: true,
                                connectorColor: '#292d2f',
                                formatter: function() {
                                    if(this.point.name=='1'){
                                       // return '<img src="http://highcharts.com/demo/gfx/sun.png" alt="" style="vertical-align: middle; width: 32px; height: 32px"/>';
                                    }else if(this.point.name=='2'){
                                       // return '<img src="http://highcharts.com/demo/gfx/sun.png" alt="" style="vertical-align: middle; width: 32px; height: 32px"/>';
                                    }else{
                                       // return '<img src="http://highcharts.com/demo/gfx/sun.png" alt="" style="vertical-align: middle; width: 32px; height: 32px"/>';
                                    }
                                },
                                useHTML: true
                            }

                        }
                    },
                    title: {
                        text: ''
                    }
                },
                series: [{
                    type: 'pie',
                    data: [
                        ['1', exited_total],
                        ['2', signed_total],
                        ['3', countersigned_total]
                    ],
                    colors: [
                        '#1975A3', '#45A6C5', '#32576A'

                    ]
                }],

                credits: {
                    enabled: false
                },
                loading: false
            }
        }

        function getDemoGraphicsChart(demographics) {
            var chart = '';
            return chart = {

                title: {
                    text: ''
                },
                xAxis: {
                    lineColor: '#000',
                    tickColor: '#000',
                    lineWidth: 2,
                    tickWidth: 0,
                    categories: ['0', '20', '40', '60', '80', '100'],
                    title: {
                        text: 'Age'
                    }
                },
                yAxis: {

                    lineColor: '#000',
                    lineWidth: 2,
                    tickWidth: 0,
                    tickColor: '#000',
                    gridLineWidth: 0,
                    min: 0,
                    title: {
                        text: 'Number of Patients'
                    },
                    stackLabels: {
                        enabled: false
                    }
                },
                options: {
                    chart: {
                        type: 'column',
                        plotBackgroundColor: '#292d2f',
                        plotBorderWidth: null,
                        plotShadow: false,
                        backgroundColor: '#292d2f'
                    },
                    tooltip: {
                        formatter: function () {
                            return '<b>' + this.x + '</b><br/>' +
                                this.series.name + ': ' + this.y + '<br/>' +
                                'Total: ' + this.point.stackTotal;
                        }
                    },
                    plotOptions: {
                        column: {
                            stacking: 'normal',
                            dataLabels: {
                                enabled: false
                            }
                        }
                    }
                },
                series: [{
                    name: 'Male',
                    data: [demographics["0"].male, demographics["20"].male, demographics["40"].male, demographics["60"].male, demographics["80"].male, demographics["100"].male]
                }, {
                    name: 'Female',
                    data: [demographics["0"].female, demographics["20"].female, demographics["40"].female, demographics["60"].female, demographics["80"].female, demographics["100"].female]
                }
                ],
                loading: false,
                credits: {
                    enabled: false
                }
            }
        }

        function totalTimeGsk(time) {
            var chart = '';
            return chart = {
                options: {
                    chart: {
                        type: 'pie',
                        plotBackgroundColor: '#292d2f',
                        plotBorderWidth: null,
                        plotShadow: false,
                        backgroundColor: '#292d2f'

                    },
                    plotOptions: {
                        pie: {
                            borderWidth: 0,
                            dataLabels: {
                                enabled: false
                            }
                        }
                    },
                    title: {
                        text: ''
                    }
                },
                series: [{
                    type: 'pie',
                    data: [
                        ['Video', time.video],
                        ['Document', time.document],
                        ['Quiz', time.quiz]
                    ],
                    colors: [
                        '#1975A3', '#45A6C5', '#32576A'

                    ]
                }],

                credits: {
                    enabled: false
                },
                loading: false
            }
        }

        function knowledgeReview(quiz){
            var chart = '';
            return chart = {
                options: {
                    chart: {
                        type: 'pie',
                        plotBackgroundColor: '#292d2f',
                        plotBorderWidth: null,
                        plotShadow: false,
                        backgroundColor: '#292d2f'

                    },
                    plotOptions: {
                        pie: {
                            borderWidth: 0,
                            dataLabels: {
                                enabled: false
                            },
                            innerSize: '60%'
                        }
                    },
                    title: {
                        text: ''
                    }
                },
                series: [{
                    type: 'pie',
                    data: [
                        ['Video', quiz.missed_zero],
                        ['Document', quiz.missed_one],
                        ['Quiz', quiz.missed_two]
                    ],
                    colors: [
                        '#1975A3', '#45A6C5', '#32576A'

                    ]
                }],

                credits: {
                    enabled: false
                },
                loading: false
            }
        }

    }
})();