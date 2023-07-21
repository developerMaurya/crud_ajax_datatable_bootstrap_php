<?php

include 'dbConnection.php';

$data=stripslashes(file_get_contents("php://input"));
$mydata=json_decode($data,true);
$id=$mydata['id'];
$name=$mydata['name'];
$email=$mydata['email'];
$password=$mydata['password'];
// insert and update data 
if (!empty($name) && !empty($email) && !empty($password)) {
    if (!$id) {
        $sql = "INSERT INTO ajax_registration (id, name, email, password) VALUES ('$id', '$name', '$email', '$password')";
        $message = "User saved successfully";
    } else {
        $sql = "UPDATE ajax_registration SET name = '$name', email = '$email', password = '$password' WHERE id = '$id'";
        $message = "User updated successfully";
    }
    
    if ($conn->query($sql) === true) {
        echo $message;
    } else {
        echo "Unable to save user";
    }
} else {
    echo "Fill all fields";
}
?>