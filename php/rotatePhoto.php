<?php

session_start();
if (!isset($_SESSION["user"]))
{
  echo "Użytkownik niezalogowany";
  die();
}
if (!isset($_GET["src"]))
  die();

$rotateFilename = $_GET["src"]; // PATH
$degrees = 90;
$fileType = strtolower(substr($rotateFilename, strrpos($rotateFilename, '.') + 1));

if($fileType == 'png' || $fileType == 'PNG'){
   header('Content-type: image/png');
   $source = imagecreatefrompng($rotateFilename);
   $bgColor = imagecolorallocatealpha($source, 255, 255, 255, 127);
   // Rotate
   $rotate = imagerotate($source, $degrees, $bgColor);
   imagesavealpha($rotate, true);
   imagepng($rotate,$rotateFilename);

}

if($fileType == 'jpg' || $fileType == 'jpeg'){
   header('Content-type: image/jpeg');
   $source = imagecreatefromjpeg($rotateFilename);
   // Rotate
   $rotate = imagerotate($source, $degrees, 0);
   imagejpeg($rotate,$rotateFilename);
}

// Free the memory
imagedestroy($source);
imagedestroy($rotate);



?>