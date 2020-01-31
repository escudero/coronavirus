var drawLineChart = function(data) {
    console.log(data);
    var ctx = document.getElementById('chart').getContext('2d');

    var data = {
        labels: data.labels,
        datasets: [{
            fill: false,
            label: 'Confirmed',
            data: data.confirmed,
            borderColor: '#0490de',
            backgroundColor: '#0072b2c2'
        }, {
            fill: false,
            label: 'Forecast',
            data: data.forecast,
            borderColor: '#7abfe6',
            backgroundColor: '#7abfe6c2'
        }, {
            fill: '+1',
            label: 'Upper limit',
            data: data.upper,
            borderColor: '#c0dceb',
            backgroundColor: '#c0dceb99'
            
        }, {
            fill: 2,
            label: 'Lower limit',
            data: data.lower,
            borderColor: '#c0dceb',
            backgroundColor: '#c0dceb99'
        }]
    };
    
    var options = {
        type: 'line',
        data: data,
        options: {
            fill: false,
            responsive: true,
            legend: {
                display: false,
            },
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            scales: {
                xAxes: [{
                    type: 'time',
                    display: true,
                    time: {
                        tooltipFormat: 'll'
                    },
                    scaleLabel: {
                        display: true,
                        labelString: "Date",
                    }
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                    },
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: "Total Confirmed",
                    }
                }]
            }
        }
    };
    
    var myChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: options
    });
}

$.getJSON('js/results.json')
  .done(drawLineChart)
  .fail(function( jqxhr, textStatus, error ) {
    var err = textStatus + ", " + error;
    console.log( "Request Failed: " + err );
});
