<?php
require "db.php";
connect();
session_start();
if (!isset($_SESSION["user"]))
{
  echo "Użytkownik niezalogowany";
  die();
}
$query = "SELECT Id, Name, IsAdmin FROM USERS WHERE Name= '" . $_SESSION['user'] . "' AND Password = '"  . md5($_POST['oldPass']) . "' AND IsAdmin=true";
$result = @mysql_query($query);
if ( @mysql_num_rows($result) != 0) {
  $query = "UPDATE USERS SET Password = '" . md5($_POST['newPass']) . "'WHERE Name= '" . $_SESSION['user'] . "'";
  $result = @mysql_query($query);

  echo "OK";
} else {
  echo "|;|Zle haslo|;|";
}
?>