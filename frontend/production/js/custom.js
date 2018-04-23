$('#chartType').change(function () {

    if ($(this).val() == 1) {
        var trace = {
            x: [1, 2, 3, 4],
            y: [10, 15, 13, 17],
            mode: 'markers',
            type: 'scatter'
        };
    }

    if ($(this).val() == 2) {
        var trace = {
            x: [2, 3, 4, 5],
            y: [16, 5, 11, 9],
            mode: 'lines',
            type: 'scatter'
        };
    }

    if ($(this).val() == 3) {
        var trace = {
            x: [1, 2, 3, 4],
            y: [12, 9, 15, 12],
            mode: 'lines+markers',
            type: 'scatter'
        };
    }

    var data = [trace];
    Plotly.newPlot('myDiv', data);
});

$.getJSON("localhost:8000/ibm/", function (data) {
    var items = [];
    $.each(data, function (key, val) {
        alert(key, val);
    });
});