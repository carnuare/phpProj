<?php
    $dsn = 'mysql:host='.$_ENV["MYSQL_HOST"].';dbname='.$_ENV["MYSQL_DATABASE"]; 
    $username = $_ENV["MYSQL_USER"]; 
    $password = $_ENV["MYSQL_PASSWORD"];


    try {
        $db = new PDO($dsn, $username, $password);

    } catch (PDOException $e) {
        $message = $_ENV["MYSQL_DATABASE"];
        $error = "Database Error: ";
        $error .= $e->getMessage();
        include('view/error.php');
        exit();
    }