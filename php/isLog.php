<?php
session_start();
//session_unset();
$_SESSION['language'] = "pl";
if (isset($_SESSION["user"]))
  echo "|;|" . $_SESSION["user"] . "|;|";
else
  echo "";
?>