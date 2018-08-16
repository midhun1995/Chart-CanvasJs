var jsonData = {
    "Hexaware": [
        { "x": "2016-6-25 12:58:52", "y": 1 },
        { "x": "2016-7-25 13:33:23", "y": 2.5 },
        { "x": "2016-8-25 13:49:18", "y": 2.5 },
        { "x": "2016-9-25 13:55:01", "y": 5 },
        { "x": "2016-10-25 14:00:15", "y": 6 },
    ],
    "Infy": [
         { "x": "2016-6-25 12:58:52", "y": 19.99 },
         { "x": "2016-7-25 13:33:23", "y": 21.78 },
         { "x": "2016-8-25 13:49:18", "y": 23.45 },
         { "x": "2016-9-25 13:55:01", "y": 24.73 },
         { "x": "2016-10-25 14:00:15", "y": 26.58 }
    ],
    "CTS": [
        { "x": "2016-6-25 12:58:52", "y": 27.66 },
        { "x": "2016-7-25 13:33:23", "y": 28.68 },
        { "x": "2016-8-25 13:49:18", "y": 30.73 },
        { "x": "2016-9-25 13:55:01", "y": 32.46 },
        { "x": "2016-10-25 14:00:15", "y": 34.79 }
    ],
    }
    var dataPoints = [];
    window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer",
    {
      
      axisY: {
        title:"growth%"
      },
        data: [{
        type: 'area',
        dataPoints: dataPoints 
        }]
    });
    
    $( ".dropdown" ).change(function() {
        chart.options.data[0].dataPoints = [];
      var e = document.getElementById("dd");
        var selected = e.options[e.selectedIndex].value;
      display = jsonData[selected];
      for(var i in display) {
          var xVal = display[i].x;
        chart.options.data[0].dataPoints.push({x: new Date(xVal), y: display[i].y});
      }
      chart.render();
    });
}