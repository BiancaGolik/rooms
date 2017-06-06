<?php
require "db.php";

connect();
session_start();

if (!isset($_GET['id']))
	die("Unknown record ID");

$lang = isset($_SESSION['language']) ? $_SESSION['language'] : "pl";
$query = "SELECT ID, Name" . strtoupper($lang) . ", Description" . strtoupper($lang) . ", Rooms, Meters, People, Beds, PriceDay, PriceWeek,
PriceMonth, MinDays, Address, MainPhotoID, PMSID, Lat, Lon, UserID, UserIDModify, DateAdd, DateModify, PriceNextKid, PriceNextAdult, LastMinuteDays,
LastMinutePercent, City, Luxury, NameEN, DescriptionEN,  NameRU, DescriptionRU,  NameDE, DescriptionDE,  NameES, DescriptionES,
available, singleBed, doubleBed, singleSofa, doubleSofa, bunkleBed, 
aircondition, disable, food, kid, oven, shower, balcony, dishes, glass, kitchen, parking, toster, bath,
dishwasher, hairdryer, laundry, pet, towel, clothersdryer, ekettle, hifi, lift, pot, tv, coffe, ethernet, iron, linen, satelite, vaccumcleaner, computer,
fireplace, jacuzzi, microwave, shampoo, wifi FROM RENTALS WHERE ID=" . $_GET['id'];


$result = @mysql_query($query);

if (mysql_num_rows($result) == 0) {
    exit(1);
}
$toJS = "";
$row = @mysql_fetch_row($result);
foreach ($row as $param) {
    $toJS .= $param . "|,|";
}

$path = "../images/rooms/" . $_GET['id'];
$fi = new FilesystemIterator($path, FilesystemIterator::SKIP_DOTS);

$files = glob($path . '/*');
foreach($files as $file) {
   $toJS .= basename($file) . "|,|";
}
$toJS .= iterator_count($fi);
echo $toJS ;

?>