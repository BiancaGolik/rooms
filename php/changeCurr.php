<?php
session_start();
if(isset($_GET['curr']))
    $_SESSION["currency"] = $_GET['curr'];
if (isset($_SESSION["currency"]))
  echo "|;|" . $_SESSION["currency"] . "|;|";
else
  echo "";
?>