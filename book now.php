<?php
require_once 'connection.php'; 
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $contactNumber = $_POST['contact_no'];
    $time = $_POST['time'];
    $date = $_POST['date'];
    $services = isset($_POST['service']) ? implode(', ', $_POST['services']) : '';
    $reason = $_POST['reason'];
    $sql = "INSERT INTO booknow(username, email, contact_no, time, date, service, reason)
    VALUES ('$username', '$email', '$contact_no', '$time', '$date', '$services', '$reason')";

    if ($conn->query($sql) === TRUE) {
        echo "Booking successfully submitted!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>