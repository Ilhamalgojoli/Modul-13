<?php 
    $host = "localhost";
    $user = "phpmyadmin";
    $pass = "";
    $db = "rplacool";

    $conn = mysqli_connect($host, $user, $pass, $db);
    if($conn -> connect_error){
        die("Connection failed: " . mysqli_connect_error());
    }

?>