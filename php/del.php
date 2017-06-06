<?php
require "db.php";
session_start();
if (!isset($_SESSION["user"]) || !isset($_GET['id']))
{
  echo "Użytkownik niezalogowany";
  die();
}
connect();
$query = "DELETE FROM RENTALS WHERE ID=" .  $_GET['id'];
$result = @mysql_query($query);

//remove all photoss
$files = glob("../images/rooms/" . $_GET['id'] . '/*');
foreach($files as $file) {
  if(is_file($file))
      unlink($file);
}
rmdir("../images/rooms/" . $_GET['id'] );

header("Location: ../admin.html"); 
?>