<?php
require "db.php";
session_start();
if (!isset($_SESSION["user"]) || !isset($_GET['id']))
{
  echo "Użytkownik niezalogowany";
  die();
}
connect();
$query = "DELETE FROM USERS WHERE ID=" .  $_GET['id'];
$result = @mysql_query($query);
?>