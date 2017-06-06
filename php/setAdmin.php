<?php
require "db.php";
connect();
session_start();
if (!isset($_SESSION["user"]) || !isset($_GET['id']))
{
  echo "Użytkownik niezalogowany";
  die();
}
$query = "UPDATE USERS SET IsAdmin=true WHERE ID=" . $_GET['id'];
$result = @mysql_query($query);
?>