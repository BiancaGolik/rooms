<?php
session_start();
if(isset($_GET['lang']))
    $_SESSION["language"] = $_GET['lang'];
if (isset($_SESSION["language"]))
  echo "|;|" . $_SESSION["language"] . "|;|";
else
  echo "";
?>