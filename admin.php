<?php
require_once "db-connection.php";

$result = $conn->query("SELECT * FROM booking_requests");

while ($row = $result->fetch_assoc()) {
    echo "<tr>";
    echo "<td>" . $row['name'] . "</td>";
    echo "<td>" . $row['date'] . "</td>";
    echo "<td>" . $row['nic'] . "</td>";
    echo "<td>" . $row['service'] . "</td>";
    echo "<td>" . $row['note'] . "</td>";
    echo "<td>" . $row['contact'] . "</td>";
    echo "</tr>";
}


$conn->close();
?>
