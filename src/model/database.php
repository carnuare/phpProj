<?php
    $dsn = 'mysql:host='.$_ENV["MYSQL_HOST"].';dbname='.$_ENV["MYSQL_DATABASE"]; //antes era host=db y dbname=assignment_tracker dbname=tuOok7zziY
    $username = $_ENV["MYSQL_USER"]; //'tuOok7zziY'//antes root
    $password = $_ENV["MYSQL_PASSWORD"];//'nt9zGknXsZ' //antes example


    try {
        $db = new PDO($dsn, $username, $password);

    } catch (PDOException $e) {
        $message = $_ENV["MYSQL_DATABASE"];
        $error = "Database Error: ";
        $error .= $e->getMessage();
        include('view/error.php');
        exit();
    }