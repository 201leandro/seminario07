var trace = {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    mode: 'markers',
    type: 'scatter'
};

$('#chartType').change(function () {

    if ($(this).val() == 1) {

        var trace1 = {
            x: [1, 2, 3, 4],
            y: [10, 15, 13, 17],
            type: 'scatter'
        };

        var trace2 = {
            x: [1, 2, 3, 4],
            y: [16, 5, 11, 9],
            type: 'scatter'
        };

        var data = [trace1, trace2];

        Plotly.newPlot('myDiv', data);

    }

    if ($(this).val() == 2) {

        var trace1 = {
            x: ['Trial 1', 'Trial 2', 'Trial 3'],
            y: [3, 6, 4],
            name: 'Control',
            error_y: {
                type: 'data',
                array: [1, 0.5, 1.5],
                visible: true
            },
            type: 'bar'
        };
        var trace2 = {
            x: ['Trial 1', 'Trial 2', 'Trial 3'],
            y: [4, 7, 3],
            name: 'Experimental',
            error_y: {
                type: 'data',
                array: [0.5, 1, 2],
                visible: true
            },
            type: 'bar'
        };
        var data = [trace1, trace2];
        var layout = {
            barmode: 'group'
        };
        Plotly.newPlot('myDiv', data, layout);

    }

    if ($(this).val() == 3) {

        var x = ['day 1', 'day 1', 'day 1', 'day 1', 'day 1', 'day 1',
            'day 2', 'day 2', 'day 2', 'day 2', 'day 2', 'day 2'
        ]

        var trace1 = {
            y: [0.2, 0.2, 0.6, 1.0, 0.5, 0.4, 0.2, 0.7, 0.9, 0.1, 0.5, 0.3],
            x: x,
            name: 'kale',
            marker: {
                color: '#3D9970'
            },
            type: 'box'
        };

        var trace2 = {
            y: [0.6, 0.7, 0.3, 0.6, 0.0, 0.5, 0.7, 0.9, 0.5, 0.8, 0.7, 0.2],
            x: x,
            name: 'radishes',
            marker: {
                color: '#FF4136'
            },
            type: 'box'
        };

        var trace3 = {
            y: [0.1, 0.3, 0.1, 0.9, 0.6, 0.6, 0.9, 1.0, 0.3, 0.6, 0.8, 0.5],
            x: x,
            name: 'carrots',
            marker: {
                color: '#FF851B'
            },
            type: 'box'
        };

        var data = [trace1, trace2, trace3];

        var layout = {
            yaxis: {
                title: 'normalized moisture',
                zeroline: false
            },
            boxmode: 'group'
        };

        Plotly.newPlot('myDiv', data, layout);

    }

    if ($(this).val() == 4) {

        var x1 = [];
        var x2 = [];
        var y1 = [];
        var y2 = [];
        for (var i = 1; i < 500; i++) {
            k = Math.random();
            x1.push(k * 5);
            x2.push(k * 10);
            y1.push(k);
            y2.push(k * 2);
        }
        var trace1 = {
            x: x1,
            y: y1,
            name: 'control',
            autobinx: false,
            histnorm: "count",
            marker: {
                color: "rgba(255, 100, 102, 0.7)",
                line: {
                    color: "rgba(255, 100, 102, 1)",
                    width: 1
                }
            },
            opacity: 0.5,
            type: "histogram",
            xbins: {
                end: 2.8,
                size: 0.06,
                start: .5
            }
        };
        var trace2 = {
            x: x2,
            y: y2,
            autobinx: false,
            marker: {
                color: "rgba(100, 200, 102, 0.7)",
                line: {
                    color: "rgba(100, 200, 102, 1)",
                    width: 1
                }
            },
            name: "experimental",
            opacity: 0.75,
            type: "histogram",
            xbins: {
                end: 4,
                size: 0.06,
                start: -3.2

            }
        };
        var data = [trace1, trace2];
        var layout = {
            bargap: 0.05,
            bargroupgap: 0.2,
            barmode: "overlay",
            title: "Sampled Results",
            xaxis: {
                title: "Value"
            },
            yaxis: {
                title: "Count"
            }
        };
        Plotly.newPlot('myDiv', data, layout);

    }

    if ($(this).val() == 5) {

        // from http://bl.ocks.org/mbostock/4349187
        // Sample from a normal distribution with mean 0, stddev 1.

        function normal() {
            var x = 0,
                y = 0,
                rds, c;
            do {
                x = Math.random() * 2 - 1;
                y = Math.random() * 2 - 1;
                rds = x * x + y * y;
            } while (rds == 0 || rds > 1);
            c = Math.sqrt(-2 * Math.log(rds) / rds); // Box-Muller transform
            return x * c; // throw away extra sample y * c
        }

        var N = 2000,
            a = -1,
            b = 1.2;

        var step = (b - a) / (N - 1);
        var t = new Array(N),
            x = new Array(N),
            y = new Array(N);

        for (var i = 0; i < N; i++) {
            t[i] = a + step * i;
            x[i] = (Math.pow(t[i], 3)) + (0.3 * normal());
            y[i] = (Math.pow(t[i], 6)) + (0.3 * normal());
        }

        var trace1 = {
            x: x,
            y: y,
            mode: 'markers',
            name: 'points',
            marker: {
                color: 'rgb(102,0,0)',
                size: 2,
                opacity: 0.4
            },
            type: 'scatter'
        };
        var trace2 = {
            x: x,
            y: y,
            name: 'density',
            ncontours: 20,
            colorscale: 'Hot',
            reversescale: true,
            showscale: false,
            type: 'histogram2dcontour'
        };
        var trace3 = {
            x: x,
            name: 'x density',
            marker: {
                color: 'rgb(102,0,0)'
            },
            yaxis: 'y2',
            type: 'histogram'
        };
        var trace4 = {
            y: y,
            name: 'y density',
            marker: {
                color: 'rgb(102,0,0)'
            },
            xaxis: 'x2',
            type: 'histogram'
        };
        var data = [trace1, trace2, trace3, trace4];
        var layout = {
            showlegend: false,
            autosize: false,
            width: 600,
            height: 550,
            margin: {
                t: 50
            },
            hovermode: 'closest',
            bargap: 0,
            xaxis: {
                domain: [0, 0.85],
                showgrid: false,
                zeroline: false
            },
            yaxis: {
                domain: [0, 0.85],
                showgrid: false,
                zeroline: false
            },
            xaxis2: {
                domain: [0.85, 1],
                showgrid: false,
                zeroline: false
            },
            yaxis2: {
                domain: [0.85, 1],
                showgrid: false,
                zeroline: false
            }
        };
        Plotly.newPlot('myDiv', data, layout);

    }

    if ($(this).val() == 6) {
        var data = [{
            z: [
                [1, 20, 30, 50, 1],
                [20, 1, 60, 80, 30],
                [30, 60, 1, -10, 20]
            ],
            x: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            y: ['Morning', 'Afternoon', 'Evening'],
            type: 'heatmap'
        }];

        Plotly.newPlot('myDiv', data);
    }

    if ($(this).val() == 7) {

        data = [{
                type: 'scatterpolar',
                r: [39, 28, 8, 7, 28, 39],
                theta: ['A', 'B', 'C', 'D', 'E', 'A'],
                fill: 'toself',
                name: 'Group A'
            },
            {
                type: 'scatterpolar',
                r: [1.5, 10, 39, 31, 15, 1.5],
                theta: ['A', 'B', 'C', 'D', 'E', 'A'],
                fill: 'toself',
                name: 'Group B'
            }
        ]

        layout = {
            polar: {
                radialaxis: {
                    visible: true,
                    range: [0, 50]
                }
            }
        }

        Plotly.plot("myDiv", data, layout)

    }


    if ($(this).val() == 8) {
        Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/hobbs-pearson-trials.csv', function (err, rows) {
            function unpack(rows, key) {
                return rows.map(function (row) {
                    return row[key];
                });
            }

            var data = [{
                    type: "scatterpolargl",
                    r: unpack(rows, 'trial_1_r'),
                    theta: unpack(rows, 'trial_1_theta'),
                    mode: "markers",
                    name: "Trial 1",
                    marker: {
                        color: "rgb(27,158,119)",
                        size: 15,
                        line: {
                            color: "white"
                        },
                        opacity: 0.7
                    },
                    cliponaxis: false
                },
                {
                    type: "scatterpolargl",
                    r: unpack(rows, "trial_2_r"),
                    theta: unpack(rows, "trial_2_theta"),
                    mode: "markers",
                    name: "Trial 2",
                    marker: {
                        color: "rgb(217,95,2)",
                        size: 20,
                        line: {
                            color: "white"
                        },
                        "opacity": 0.7
                    },
                    "cliponaxis": false
                },
                {
                    type: "scatterpolargl",
                    r: unpack(rows, "trial_3_r"),
                    theta: unpack(rows, "trial_3_theta"),
                    mode: "markers",
                    name: "Trial 3",
                    marker: {
                        color: "rgb(117,112,179)",
                        size: 12,
                        line: {
                            color: "white"
                        },
                        opacity: 0.7
                    },
                    cliponaxis: false
                },
                {
                    type: "scatterpolargl",
                    r: unpack(rows, "trial_4_r"),
                    theta: unpack(rows, "trial_4_theta"),
                    mode: "markers",
                    name: "Trial 4",
                    marker: {
                        color: "rgb(231,41,138)",
                        size: 22,
                        line: {
                            color: "white"
                        },
                        opacity: 0.7
                    },
                    cliponaxis: false
                },
                {
                    type: "scatterpolargl",
                    r: unpack(rows, "trial_5_r"),
                    theta: unpack(rows, "trial_5_theta"),
                    mode: "markers",
                    name: "Trial 5",
                    marker: {
                        color: "rgb(102,166,30)",
                        size: 19,
                        line: {
                            color: "white"
                        },
                        opacity: 0.7
                    },
                    cliponaxis: false
                },
                {
                    type: "scatterpolargl",
                    r: unpack(rows, "trial_6_r"),
                    theta: unpack(rows, "trial_6_theta"),
                    mode: "markers",
                    name: "Trial 6",
                    marker: {
                        color: "rgb(230,171,2)",
                        size: 10,
                        line: {
                            color: "white"
                        },
                        opacity: 0.7
                    },
                    cliponaxis: false
                }
            ]

            var layout = {
                title: "Hobbs-Pearson Trials",
                font: {
                    size: 15
                },
                showlegend: false,
                polar: {
                    bgcolor: "rgb(223, 223, 223)",
                    angularaxis: {
                        tickwidth: 2,
                        linewidth: 3,
                        layer: "below traces"
                    },
                    radialaxis: {
                        side: "counterclockwise",
                        showline: true,
                        linewidth: 2,
                        tickwidth: 2,
                        gridcolor: "white",
                        gridwidth: 2
                    }
                },
                paper_bgcolor: "rgb(223, 223, 223)",
            }

            Plotly.plot('myDiv', data, layout);
        })
    }

    if ($(this).val() == 9) {
        var trace1 = {
            r: [77.5, 72.5, 70.0, 45.0, 22.5, 42.5, 40.0, 62.5],
            t: ['North', 'N-E', 'East', 'S-E', 'South', 'S-W', 'West', 'N-W'],
            name: '11-14 m/s',
            marker: {
                color: 'rgb(106,81,163)'
            },
            type: 'area'
        };

        var trace2 = {
            r: [57.5, 50.0, 45.0, 35.0, 20.0, 22.5, 37.5, 55.0],
            t: ['North', 'N-E', 'East', 'S-E', 'South', 'S-W', 'West', 'N-W'],
            name: '8-11 m/s',
            marker: {
                color: 'rgb(158,154,200)'
            },
            type: 'area'
        };

        var trace3 = {
            r: [40.0, 30.0, 30.0, 35.0, 7.5, 7.5, 32.5, 40.0],
            t: ['North', 'N-E', 'East', 'S-E', 'South', 'S-W', 'West', 'N-W'],
            name: '5-8 m/s',
            marker: {
                color: 'rgb(203,201,226)'
            },
            type: 'area'
        };

        var trace4 = {
            r: [20.0, 7.5, 15.0, 22.5, 2.5, 2.5, 12.5, 22.5],
            t: ['North', 'N-E', 'East', 'S-E', 'South', 'S-W', 'West', 'N-W'],
            name: '< 5 m/s',
            marker: {
                color: 'rgb(242,240,247)'
            },
            type: 'area'
        };

        var data = [trace1, trace2, trace3, trace4];

        var layout = {
            title: 'Wind Speed Distribution in Laurel, NE',
            font: {
                size: 16
            },
            legend: {
                font: {
                    size: 16
                }
            },
            radialaxis: {
                ticksuffix: '%'
            },
            orientation: 270
        };

        Plotly.newPlot('myDiv', data, layout);
    }

    if ($(this).val() == 10) {
        Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/gapminderDataFiveYear.csv', function (err, data) {
            // Create a lookup table to sort and regroup the columns of data,
            // first by year, then by continent:
            var lookup = {};

            function getData(year, continent) {
                var byYear, trace;
                if (!(byYear = lookup[year])) {;
                    byYear = lookup[year] = {};
                }
                // If a container for this year + continent doesn't exist yet,
                // then create one:
                if (!(trace = byYear[continent])) {
                    trace = byYear[continent] = {
                        x: [],
                        y: [],
                        id: [],
                        text: [],
                        marker: {
                            size: []
                        }
                    };
                }
                return trace;
            }

            // Go through each row, get the right trace, and append the data:
            for (var i = 0; i < data.length; i++) {
                var datum = data[i];
                var trace = getData(datum.year, datum.continent);
                trace.text.push(datum.country);
                trace.id.push(datum.country);
                trace.x.push(datum.lifeExp);
                trace.y.push(datum.gdpPercap);
                trace.marker.size.push(datum.pop);
            }

            // Get the group names:
            var years = Object.keys(lookup);
            // In this case, every year includes every continent, so we
            // can just infer the continents from the *first* year:
            var firstYear = lookup[years[0]];
            var continents = Object.keys(firstYear);

            // Create the main traces, one for each continent:
            var traces = [];
            for (i = 0; i < continents.length; i++) {
                var data = firstYear[continents[i]];
                // One small note. We're creating a single trace here, to which
                // the frames will pass data for the different years. It's
                // subtle, but to avoid data reference problems, we'll slice
                // the arrays to ensure we never write any new data into our
                // lookup table:
                traces.push({
                    name: continents[i],
                    x: data.x.slice(),
                    y: data.y.slice(),
                    id: data.id.slice(),
                    text: data.text.slice(),
                    mode: 'markers',
                    marker: {
                        size: data.marker.size.slice(),
                        sizemode: 'area',
                        sizeref: 200000
                    }
                });
            }

            // Create a frame for each year. Frames are effectively just
            // traces, except they don't need to contain the *full* trace
            // definition (for example, appearance). The frames just need
            // the parts the traces that change (here, the data).
            var frames = [];
            for (i = 0; i < years.length; i++) {
                frames.push({
                    name: years[i],
                    data: continents.map(function (continent) {
                        return getData(years[i], continent);
                    })
                })
            }

            // Now create slider steps, one for each frame. The slider
            // executes a plotly.js API command (here, Plotly.animate).
            // In this example, we'll animate to one of the named frames
            // created in the above loop.
            var sliderSteps = [];
            for (i = 0; i < years.length; i++) {
                sliderSteps.push({
                    method: 'animate',
                    label: years[i],
                    args: [
                        [years[i]], {
                            mode: 'immediate',
                            transition: {
                                duration: 300
                            },
                            frame: {
                                duration: 300,
                                redraw: false
                            },
                        }
                    ]
                });
            }

            var layout = {
                xaxis: {
                    title: 'Life Expectancy',
                    range: [30, 85]
                },
                yaxis: {
                    title: 'GDP per Capita',
                    type: 'log'
                },
                hovermode: 'closest',
                // We'll use updatemenus (whose functionality includes menus as
                // well as buttons) to create a play button and a pause button.
                // The play button works by passing `null`, which indicates that
                // Plotly should animate all frames. The pause button works by
                // passing `[null]`, which indicates we'd like to interrupt any
                // currently running animations with a new list of frames. Here
                // The new list of frames is empty, so it halts the animation.
                updatemenus: [{
                    x: 0,
                    y: 0,
                    yanchor: 'top',
                    xanchor: 'left',
                    showactive: false,
                    direction: 'left',
                    type: 'buttons',
                    pad: {
                        t: 87,
                        r: 10
                    },
                    buttons: [{
                        method: 'animate',
                        args: [null, {
                            mode: 'immediate',
                            fromcurrent: true,
                            transition: {
                                duration: 300
                            },
                            frame: {
                                duration: 500,
                                redraw: false
                            }
                        }],
                        label: 'Play'
                    }, {
                        method: 'animate',
                        args: [
                            [null], {
                                mode: 'immediate',
                                transition: {
                                    duration: 0
                                },
                                frame: {
                                    duration: 0,
                                    redraw: false
                                }
                            }
                        ],
                        label: 'Pause'
                    }]
                }],
                // Finally, add the slider and use `pad` to position it
                // nicely next to the buttons.
                sliders: [{
                    pad: {
                        l: 130,
                        t: 55
                    },
                    currentvalue: {
                        visible: true,
                        prefix: 'Year:',
                        xanchor: 'right',
                        font: {
                            size: 20,
                            color: '#666'
                        }
                    },
                    steps: sliderSteps
                }]
            };

            // Create the plot:
            Plotly.plot('myDiv', {
                data: traces,
                layout: layout,
                frames: frames,
            });
        });
    }

    // if ($(this).val() == 5) {}


});

$.getJSON("localhost:8000/titanic/", function (data) {
    var items = [];
    $.each(data, function (key, val) {
        alert(key, val);
    });
});