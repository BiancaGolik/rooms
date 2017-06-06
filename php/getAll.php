<?php
require "db.php";

connect();

session_start();
$lang = isset($_SESSION['language']) ? $_SESSION['language'] : "pl";
$query = "SELECT ID, Name" . strtoupper($lang) . ", PriceMonth, City, Luxury, available, MainPhotoID FROM RENTALS";

$result = @mysql_query($query);
$toJS = "|;|";
while($row = @mysql_fetch_row($result)) {
        $toJS .= $row[0] . "|,|" . $row[1]. "|,|" . $row[2]. "|,|" . $row[3]. "|,|";
        $toJS .= $row[4] . "|,|" . $row[5]. "|,|" . $row[6]. "|;|";
}
//$isLogged = isset($_SESSION["user"]) ? $_SESSION["user"] : "";
echo $toJS;

?>