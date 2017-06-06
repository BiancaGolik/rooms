<?php

$server = "mysql.cba.pl";
$db = "bianca";
$port = "3306";
$admin = "bianca";
$adminPass = "donnie23";

function connect()
{
            global $server, $db, $port, $admin, $adminPass;
            $connection = @mysql_connect($server. ":" . $port, $admin, $adminPass)
                    or die("Brak połączenia!"."</br>");
            @mysql_select_db($db)
                    or die("Brak bazy danych!"."</br>");
            @mysql_query("SET NAMES utf8");
}

?>