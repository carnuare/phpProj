<?php include('header.php') ?>
<h2>Error</h2>
<p><?php echo $error; 
        print "//////";
        print "NOTA: If you get a -connection refused- and you have just run docker-compose up, you should wait a couple of seconds and refresh the page.";
        print "DB HOST:".getenv("MYSQL_HOST");
?></p>
<br>
<p><a href=".">Back to List</a></p>
<?php include('footer.php') ?>