<?php
require "db.php";
connect();
session_start();
$query = "SELECT Id, Name, IsAdmin FROM USERS WHERE Name= '" . $_POST['login'] . "' AND Password = '"  . md5($_POST['password']) . "'";

$result = @mysql_query($query);
if ( @mysql_num_rows($result) != 0)
{
  $user = @mysql_fetch_row($result);
  if ($user[2] != 1)
  {
    echo "|;|Not admin|;|";
    die();
  }
  $_SESSION["user"]= $_POST['login'];
  $userdata = array("ID" => $user[0],"login" => $user[1],"isAdmin" => $user[2]);
  echo "|;|" . json_encode($userdata) . "|;|";
} else {
    echo "|;|Not exists|;|";
    die();
}
?>