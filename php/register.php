<?php
require "db.php";
connect();
session_start();
$query = "SELECT Id, Name, IsAdmin FROM USERS WHERE Name= '" . $_POST['login'] . "'";
$result = @mysql_query($query);
if ( @mysql_num_rows($result) != 0) {
  echo "|;|user exist's|;|";
} else {
  $query = "INSERT INTO USERS (Name, Password, IsAdmin) VALUES ('" .  $_POST['login'] . "', '" . md5( $_POST['password']) . "', false)";
  $result = @mysql_query($query);
  echo "OK";
}
?>