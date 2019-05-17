function fetchData(action) {

    let timeStart = document.getElementById('start').value;
    let timeStop = document.getElementById('stop').value;
    let link = document.getElementsByClassName('mdb-select')[0].value;
    var array = link.split(',');
    if (array[0] === "pump") {
        document.getElementById("pump").style.display = "block";
        document.getElementById("myChart").style.display = "none";
        document.getElementById("myChart2").style.display = "none";

    } else {
        document.getElementById("pump").style.display = "none";
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: 'requestdata',
            data: {
                link:link
            },
            success: function(data)
            {
                createGraphs(data, timeStart, timeStop, array[0]);
            }
        });
    }
  }

function createGraphs(data, timeStart, timeStop, valueName){
    timeStart = Date.parse(timeStart);
    timeStop = Date.parse(timeStop);
    //console.log(valueName);
    var dataset = [];
    var labelsData = [];
    var bgColor = [];
    var borderColor = [];
    var val = valueName;
    data[0].forEach(function (e, i) {
      if (Date.parse(e.time) >= timeStart && Date.parse(e.time) <= timeStop) {
          if (i % 20 == 0) {
              labelsData.push(e.time);
              switch (val) {
                  case "tase":
                      dataset.push(e.tase);
                  break;
                  case "temperatuur":
                      dataset.push(e.temperatuur);
                  break;
                  case "niiskus":
                      dataset.push(e.niiskus);
                  break;
                  default:
                      dataset.push(e.valgus);
                      break;
              }
              //console.log(val);
              bgColor.push('rgba(' + Math.random() * 255 +', ' + Math.random() * 255 +', '+Math.random()*255+', 0.2)');
              borderColor.push('rgba(' + Math.random() * 255 + ', ' + Math.random() * 255 + ', ' + Math.random() * 255 + ', 1)');
          }
      }
    });
    if (!myChart && !chart) {
    } else {
        myChart.destroy();
        chart.destroy();
    }
  var ctx = document.getElementById('myChart').getContext('2d');
  var chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: labelsData,
      datasets: [{
          label: val,
          borderColor: 'rgb(255, 99, 132)',
          data: dataset
      }]
  },
  options: {
  }
});

var ctx = document.getElementById('myChart2').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labelsData,
      datasets: [{
        label: 'Valgus',
        data: dataset,
        backgroundColor: bgColor,
        borderColor: borderColor,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
  $('#myChart2').hide();
  $('#myChart').show();
  //document.getElementsByClassName()
}

function showChart(x) {
  switch(x) {
    case 0:
      $('#myChart2').hide();
      $('#myChart').show();
    break;
    
    case 1:
      $('#myChart2').show();
      $('#myChart').hide();
    break;
  }
}

/*function switchLight(state)
{
    if (state === "1") {
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: 'requestdata',
            data: {
                link:link
            },
            success: function(data)
            {
                createGraphs(data, timeStart, timeStop, array[0]);
            }
        });
    } else  {
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: 'requestdata',
            data: {
                link:link
            },
            success: function(data)
            {
                createGraphs(data, timeStart, timeStop, array[0]);
            }
        });
    }

}*/