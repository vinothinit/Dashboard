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
                        height:340,
                        plotBackgroundColor: '#292d2f',
                        plotBorderWidth: null,
                        plotShadow: false,
                        backgroundColor: '#292d2f'

                    },
                    plotOptions: {
                        pie: {
                            borderWidth: 0,
                            size: 200,
                            dataLabels: {
                                enabled: true,
                                connectorColor: '#292d2f',
                                formatter: function() {
                                    if(this.point.name=='Exited Total'){
                                        return '<img src="content/images/2.png" alt="" align="right" style=" margin-left: -38px; width: 22px; height: 22px;"/>';
                                    }else if(this.point.name=='Signed Total'){
                                        return '<img src="content/images/1.png" alt="" style="width: 22px; height: 22px; ;position:absolute; margin-left: -21px;"/>';
                                    }else{
                                        return '<img src="content/images/3.png" alt="" style=" width: 22px; height: 22px; margin-left: 2px;position:absolute;"/>';
                                    }
                                },
                                useHTML: true
                            }

                        }
                    },
                    tooltip: {
                        formatter: function () {
                            return this.point.name + ': ' + this.y + '<br/>';;
                        }
                    },
                    title: {
                        text: ''
                    }
                },
                series: [{
                    type: 'pie',
                    data: [
                        ['Signed Total', signed_total],
                        ['Exited Total', exited_total],
                        ['Countersigned Total', countersigned_total]
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
                    lineColor: '#595b67',
                    tickColor: '#595b67',
                    lineWidth: 2,
                    tickWidth: 0,
                    categories: ['0', '20', '40', '60', '80', '100'],
                    title: {
                        text: 'Age'
                    },
                    labels: {
                        style: {
                            fontSize: '12px',
                            fontWeight: 'bold',
                            color:'#595b67'
                        }
                    }
                },
                yAxis: {

                    lineColor: '#595b67',
                    lineWidth: 2,
                    tickWidth: 0,
                    tickColor: '#595b67',
                    gridLineWidth: 0,
                    min: 0,
                    title: {
                        text: 'Number of Patients'
                    },
                    labels: {
                        style: {
                            fontSize: '12px',
                            fontWeight: 'bold',
                            color:'#595b67'
                        }
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
                                return '<span><img src="content/images/men.png" width="32" height="32" style=" position:absolute; margin-left:112px;"/></span>';
                            }else {
                                return '<span><img src="content/images/girl.png" width="32" height="32" style=" position:absolute; margin-left:54px;"/></span>';
                            }
                        }
                    },
                    chart: {
                        type: 'column',
                        plotBackgroundColor: '#292d2f',
                        plotBorderWidth: null,
                        plotShadow: false,
                        backgroundColor: '#292d2f',
                        // Edit chart spacing
                        spacingBottom: 15,
                        spacingTop: 10,
                        spacingLeft: 10,
                        spacingRight: 10,

                        // Explicitly tell the width and height of a chart
                        width: null,
                        height: null
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
                    data: [demographics["0"].male, demographics["20"].male, demographics["40"].male, demographics["60"].male, demographics["80"].male, demographics["100"].male],
                    borderWidth:0
                }, {
                    name: 'Female',
                    data: [demographics["0"].female, demographics["20"].female, demographics["40"].female, demographics["60"].female, demographics["80"].female, demographics["100"].female],
                    borderWidth:0
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
                            size: 200,
                            borderWidth: 0,
                            dataLabels: {
                                enabled: true,
                                connectorColor: '#292d2f',
                                formatter: function() {
                                    if(this.point.name=='Video'){
                                        return '<img src="content/images/tabl2.png" alt="" style="margin-left: -20px; middle; width: 17px; height: 11px"/>';
                                    }else if(this.point.name=='Document'){
                                        return '<img src="content/images/tabl1.png" alt="" style="margin-left: -20px; width: 22px; height: 22px"/>';
                                    }else{
                                        return '<img src="content/images/tabl3.png" alt="" style=" margin-left:6px; width: 13px; height: 17px;position:absolute;"/>';
                                    }
                                },
                                useHTML: true
                            }
                        }
                    },
                    tooltip: {
                        formatter: function () {
                            return this.point.name + ': ' + this.y + '<br/>';;
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
                            size:200,
                            borderWidth: 0,
                            innerSize: '50%',
                            dataLabels: {
                                enabled: false
                            }
                        }
                    },
                    tooltip: {
                        formatter: function () {
                            return this.point.name + ': ' + this.y + '<br/>';;
                        }
                    },
                    title: {
                        enabled: true,
                        useHTML: true,
                        text: '<img src="content/images/table.png" style="width: 42px; height: 59px;  margin-top: -9px;">',
                        align: 'center',
                        verticalAlign: 'middle',
                        y: 0
                    }
                },

                series: [{
                    type: 'pie',
                    data: [
                        ['Missed Zero', quiz.missed_zero],
                        ['Missed One', quiz.missed_one],
                        ['Missed Two', quiz.missed_two]
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