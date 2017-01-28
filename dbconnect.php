<?php
//Step1
require_once('dbconfig.php');
 $db = mysqli_connect('127.0.0.1','federerp_pb','291iSjTyr2sWvqG5','federerp_pb')
 or die('Error connecting to MySQL server.');
?>


<html>
 <head>
 </head>
 <body>
     <?php
     echo "Hello PHP Worlds";
     ?>
 <h1>PHP connect to MySQLa</h1>

 <?php
//Step2
$query = "SELECT * FROM eventTable";
mysqli_query($db, $query) or die('Error querying database.');
?>

</body>
</html>
