<?php
include 'dbConnection.php';

$data=stripslashes(file_get_contents("php://input"));
$mydata=json_decode($data,true);

$id=$mydata['uid'];
if(!empty($id)){
    $sql="DELETE FROM ajax_registration WHERE id={$id}";
    if($conn->query($sql)==TRUE){
        echo 1;
    }else{
        echo 0;
    }
}else{
    echo "please check details";
}

?>