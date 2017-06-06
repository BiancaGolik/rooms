<?php
session_start();
if (!isset($_POST['mail']) || !isset($_POST['msg']))
  die();

mail("bianka.golik@gmail.com", "Od: " . $_POST['mail'] . " Język: ". $_SESSION['language'], $_POST['msg']);
?>