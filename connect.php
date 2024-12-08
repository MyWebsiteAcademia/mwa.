<?php
	$username = $_POST['username'];
	$email = $_POST['email'];
	$password = $_POST['password'];


	$conn = new mysqli('localhost','root','','mwa');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into signup(username, email, password) values(?, ?, ?)");
		$stmt->bind_param("sss", $username, $email, $password);
		if ($stmt->execute()) {
            
            header("Location: success.html");
            exit();
        } else {
            echo "Error: " . $stmt->error;
        }
		$stmt->close();
		$conn->close();
	}
?>