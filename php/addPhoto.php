<?php

session_start();
if (!isset($_SESSION["user"]))
{
  echo "Użytkownik niezalogowany";
  die();
}
$tmpDir = "images/rooms/tmp/";
mkdir("../" . $tmpDir);
$total = count($_FILES['files']['name']);
$all="|;|";
// Loop through each file
for($i=0; $i<$total; $i++) {
  //Get the temp file path
  $tmpFilePath = $_FILES['files']['tmp_name'][$i];

  //Make sure we have a filepath
  if ($tmpFilePath != ""){
    $ext  = strtolower(pathinfo($_FILES["files"]["name"][$i], PATHINFO_EXTENSION));
    $newFilePath = $tmpDir . $_POST['ids'][$i] . "." . $ext;
    $all = $all . "|;|" . $newFilePath;
    move_uploaded_file($tmpFilePath, "../" . $newFilePath);
  }
}
echo $all;
?>