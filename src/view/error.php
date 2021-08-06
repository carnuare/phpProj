<?php include('header.php') ?>
<h2>Error</h2>
<p><?php echo $error; 
        print "//////";
        print "NOTA: If you get a -connection refused- and you have just run docker-compose up, you should wait a couple of seconds and refresh the page.";
?></p>
<br>
<p><a href=".">Back to List</a></p>
<?php include('footer.php') ?>