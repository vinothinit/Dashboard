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
                                        return '<img src="content/images/2.png" alt="" style="margin-left: -20px; middle; width: 22px; height: 22px"/>';
                                    }else if(this.point.name=='2'){
                                        return '<img src="content/images/1.png" alt="" style="margin-left: -20px; width: 22px; height: 22px"/>';
                                    }else{
                                        return '<img src="content/images/3.png" alt="" style="margin-left: -20px; width: 22px; height: 22px"/>';
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
                        'rgb(40,93,110)','rgb(2,118,170)',  'rgb(33,151,183)'

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
                title:{
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
                    colors: ["rgb(19,156,211)", "rgb(181,113,175)"],
                    legend: {
                        useHTML:true,
                        symbolWidth:0,
                        verticalAlign: 'top',
                        labelFormatter: function () {
                             if(this.name=='Male') {
                                return '<span><img src="content/images/men.png" width="32" height="32"/></span>';
                            }else {
                                return '<span><img src="content/images/women.png" width="32" height="32"/></span>';
                            }
                        }
                    },
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
                        ['', quiz.missed_zero],
                        ['', quiz.missed_one],
                        ['', quiz.missed_two]
                    ],
                    colors: [
                        'rgb(98,188,76)', 'rgb(229,62,48)', 'rgb(247,148,33)'

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