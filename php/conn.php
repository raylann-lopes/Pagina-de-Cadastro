<?php
/*
$servidor	= "localhost";
$usuario	= "root";
$senha		= "usbw";
$dbname		= "nserrana";

/$conn = new PDO($servidor, $usuario, $senha, $dbname,array(PDO::ATTR_PERSISTENT => true)) or die("Connection Off: " . $conn->connect_error);
*/
$conn = new PDO("postgresql://postgres:2204@localhost:5432/nova-serrana");
