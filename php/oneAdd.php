<?php
require "db.php";
function rmAll($pathToRm)
{
  $files = glob($pathToRm . '/*');
  foreach($files as $file) {
    if(is_file($file))
      unlink($file);
  }
}

session_start();
if (!isset($_SESSION["user"]))
{
  echo "Użytkownik niezalogowany";
  die();
}
connect();

$photos = explode("|;|", $_POST['allPhotos']);
//$mainPhoto = "1." . pathinfo( basename($photos[0]), PATHINFO_EXTENSION);
$mainPhoto = basename($_POST['mainPhotoForm']);

$allIcons = array("available", "aircondition","disable","food","kid","oven","shower","balcony","dishes","glass","kitchen","parking","toster",
"bath","dishwasher","hairdryer","laundry","pet","towel","clothersdryer","ekettle","hifi","lift","pot","tv","coffe","ethernet",
"iron","linen","satelite","vaccumcleaner","computer","fireplace","jacuzzi","microwave","shampoo","wifi");


$NameEN = (!isset($_POST['nameEN'])|| $_POST['nameEN'] == "") ? $_POST['namePL'] : $_POST['nameEN'];
$NameDE = (!isset($_POST['nameDE'])|| $_POST['nameDE'] == "") ? $_POST['namePL'] : $_POST['nameDE'];
$NameRU = (!isset($_POST['nameRU'])|| $_POST['nameRU'] == "") ? $_POST['namePL'] : $_POST['nameRU'];
$NameES = (!isset($_POST['nameES'])|| $_POST['nameES'] == "") ? $_POST['namePL'] : $_POST['nameES'];

$DescriptionEN= (!isset($_POST['descriptionEN'])|| $_POST['descriptionEN'] == "") ? $_POST['descriptionPL'] : $_POST['descriptionEN'];
$DescriptionDE= (!isset($_POST['descriptionDE'])|| $_POST['descriptionDE'] == "") ? $_POST['descriptionPL'] : $_POST['descriptionDE'];
$DescriptionRU= (!isset($_POST['descriptionRU'])|| $_POST['descriptionRU'] == "") ? $_POST['descriptionPL'] : $_POST['descriptionRU'];
$DescriptionES= (!isset($_POST['descriptionES'])|| $_POST['descriptionES'] == "") ? $_POST['descriptionPL'] : $_POST['descriptionES'];

$allValues = array(  "NamePL" => $_POST['namePL'], "DescriptionPL" => $_POST['descriptionPL'],  "NameEN" => $NameEN,
 "DescriptionEN" => $DescriptionEN, "NameRU " =>   $NameRU ,   "DescriptionRU" => $DescriptionRU,  "NameDE " => $NameDE ,
 "DescriptionDE" => $DescriptionDE, "NameES " =>   $NameES ,   "DescriptionES" => $DescriptionES,
 "PMSID" =>  $_POST['tokeetID'], "Address" =>  $_POST['adres'], "MainPhotoID" => $mainPhoto, "City" =>  $_POST['city'], 
"Luxury" => $_POST['rating'], "Rooms" =>  $_POST['rooms'],  "Meters" => $_POST['m2'],  "People" => $_POST['people']
, "PriceDay" =>  $_POST['dayPrice'],  "PriceWeek" => $_POST['weekPrice'],
"PriceMonth" =>  $_POST['monthPrice'],  "MinDays" => $_POST['minDays'],  "PriceNextKid" => $_POST['NextKid'],  
"PriceNextAdult" => $_POST['NextAdult'],  "LastMinuteDays" => $_POST['LastMinuteDays'],  "LastMinutePercent" => $_POST['LastMinutePercent'],
"singleBed" => $_POST['singleBed'], "doubleBed" => $_POST['doubleBed'], "singleSofa" => $_POST['singleSofa'], "doubleSofa" => $_POST['doubleSofa'],
"bunkleBed" => $_POST['bunkleBed'], "Lat" => $_POST['lat'], "Lon" => $_POST['lon'],"UserID" => "1");

foreach($allIcons as $icon)
{
  $isicon = isset($_POST[$icon]) ? "true" : "false";
  $allValues[$icon] = $isicon;
}

//update existing
if (isset($_GET['id']))
{
  $query = "UPDATE RENTALS SET DateModify = '" . date('Y-m-d H:i:s') . "', ";
  $keys = array_keys($allValues);
  $quation = true;
  foreach ($keys as $key)
  {
      $query = ($quation == true) ? $query . $key . ' = "' . $allValues[$key] . '", ' :
                                    $query . $key . ' = ' . $allValues[$key] . ', ';
      if ($key == "City")
        $quation = false;
  }
  
  $query = $query . 'UserIDModify = 1 WHERE ID = ' .  $_GET['id'];
  $res = @mysql_query($query);
  $path = "../images/rooms/" . $_GET['id'];
}
//create new
else
{
  $query = "INSERT INTO RENTALS (";
  $keys = array_keys($allValues);
  
  $quation = true;
  $queryVal = "";
  foreach ($keys as $key)
  {
        $query = $query . $key . ", ";
        $queryVal = ($quation == true) ? $queryVal . "'" . $allValues[$key] . "', " : $queryVal . $allValues[$key] . ", ";
        if ($key == "City")
          $quation = false;
  }
  
  $query = $query . "DateModify, DateAdd) VALUES (" .  $queryVal . "'" . date('Y-m-d H:i:s') . "', '" . date('Y-m-d H:i:s') . "')";
  $res = @mysql_query($query);
  
  //create
  $query = "SELECT ID FROM RENTALS ORDER BY ID DESC LIMIT 1";
  $res = @mysql_query($query);
  $id = @mysql_fetch_row($res);
  $path = "../images/rooms/" . $id[0];
  mkdir($path);
}
$tmpPath = $path . "/tmp";
mkdir($tmpPath);
$cnt = 0;
foreach($photos as $photo)
{
  $ext = pathinfo($photo, PATHINFO_EXTENSION);
  $photoID = $cnt < 10 ? "0" . $cnt : $cnt;
  $tmpPhoto = $tmpPath . "/" . $photoID . "." . $ext;
echo $tmpPhoto;
echo $photo;
echo "-------------------";
copy("../" . $photo, $tmpPhoto);
  $cnt++;
}

$tmp = "../images/rooms/tmp";
rmAll($path);
rmAll($tmp);
rmdir($tmp);


$files = glob($tmpPath . '/*');
foreach($files as $file) {
  copy($file, $path . "/" . basename($file));
}

rmAll($tmpPath);
rmdir($tmpPath);

//header( "Location: ../admin.html" );
?>