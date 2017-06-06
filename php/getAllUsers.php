<?php
require "db.php";
connect();
session_start();
if (!isset($_SESSION["user"]))
{
  echo "Użytkownik niezalogowany";
  die();
}
$query = "SELECT Id, Name, IsAdmin FROM USERS";
$result = @mysql_query($query);
if ( @mysql_num_rows($result) != 0)
{
$toJS = "|;|";
while($row = @mysql_fetch_row($result)) {
        $toJS .= $row[0] . "|,|" . $row[1]. "|,|" . $row[2] . "|;|";
}
echo $toJS;
}
?>