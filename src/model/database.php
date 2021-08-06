<?php
    $dsn = 'mysql:host=remotemysql.com;dbname=tuOok7zziY'; //antes era host=db y dbname=assignment_tracker
    $username = 'tuOok7zziY'; //antes root
    $password = 'nt9zGknXsZ'; //antes example


    try {
        $db = new PDO($dsn, $username, $password);
        //$db = new PDO($dsn, $username, $password);
    } catch (PDOException $e) {
        $error = "Database Error: ";
        $error .= $e->getMessage();
        include('view/error.php');
        exit();
    }