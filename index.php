<?php
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <title>Ajaveeb</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
  <script src="graphing.js"></script>
</head>

<body class="bg-light">
  <nav class="navbar navbar-inverse bg-light">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand text-white" href="#">Chart thing</a>
      </div>
      <div class="navbar-form navbar-left">
          <select class="mdb-select md-form" id="link">
          <option value="valgus,http://mahkor.000webhostapp.com/valgus.txt" disabled selected>Choose your option</option>
          <option value="tase,http://mahkor.000webhostapp.com/veetaseEllu.txt">Veetase</option>
          <option value="temperatuur,http://mahkor.000webhostapp.com/temp.txt">Temperatuur</option>
          <option value="niiskus,http://mahkor.000webhostapp.com/akvaarium.txt">Niiskus</option>
          <option value="pump,hawduw">Valgustuse juhtimine</option>
          </select>
          <label for="start" class="text-black">Start date:</label>
          <input type="date" id="start" name="start"
                 value="2019-04-15">
          <label for="start" class="text-black">Stop date:</label>
          <input type="date" id="stop" name="stop"
                 value="2019-05-13">
          <button class="btn btn-warning" onclick="fetchData('default')">Search</button>
          <button class="btn btn-danger" id="lineChart" onclick="showChart(0)">Line chart</button>
          <button class="btn btn-success" id="barChart" onclick="showChart(1)">Bar chart</button>
    </div>
    </div>
  </nav>
  <div class="container">
    <canvas id="myChart"></canvas>
  </div>
  <canvas id="myChart2"></canvas>
  <div style="display: none" id="pump">
      <iframe id="iframeId" src="https://majestic-openings.000webhostapp.com/too5/lightController.html"
              style="position: absolute; height: 100%; border: none">>

      </iframe>
      <!--<button onclick="switchLight(1)" type="button" class="btn btn-primary btn-lg">Pane tööle</button>
      <button onclick="switchLight(0)" type="button" class="btn btn-secondary btn-lg">Pane kinni</button>-->
  </div>

</body>

</html>
<script>
    fetchData('default')
  //fetchData("default", "2019-04-15 08:23:22", "2019-05-13 07:47:29");
</script>