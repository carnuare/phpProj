<?php
    $dsn = 'mysql:host=db;dbname=assignment_tracker';
    $username = 'root';
    $password = 'example';


    try {
        $db = new PDO($dsn, $username, $password);
        //$db = new PDO($dsn, $username, $password);
    } catch (PDOException $e) {
        $error = "Database Error: ";
        $error .= $e->getMessage();
        include('view/error.php');
        exit();
    }