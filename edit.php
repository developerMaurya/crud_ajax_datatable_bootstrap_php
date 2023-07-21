<?php
include 'dbConnection.php';

$data=stripslashes(file_get_contents("php://input"));
$mydata=json_decode($data,true);

$id=$mydata['uid'];

$sql="SELECT * FROM ajax_registration WHERE id={$id}";
$result=$conn->query($sql);
$row=$result->fetch_assoc();

echo json_encode($row);

?>