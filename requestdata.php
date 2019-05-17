<?php
    if (!empty($_POST['link'])) {
        $link = explode(",", $_POST['link']);
        $datafilepath = $link[1];
    } else {
        $datafilepath = 'http://mahkor.000webhostapp.com/valgus.txt';
    }
    $requestData = array();
    array_push($requestData, json_decode(file_get_contents($datafilepath))); 
    echo json_encode($requestData);
?>