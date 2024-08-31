<?php
require_once 'connection.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['username']) && isset($_POST['password'])) {
        $username = $_POST['username'];
        $password = $_POST['password'];

        $stmt = $conn->prepare("SELECT * FROM user WHERE username = ?");
        if ($stmt) {
            $stmt->bind_param("s", $username);
            $stmt->execute();

            $result = $stmt->get_result();

            if ($result) {
                if ($result->num_rows === 1) {
                    $row = $result->fetch_assoc();
                    $hashed_password = $row['password'];
                    if (password_verify($password, $hashed_password)) {
                        echo "Login successful!";
                    } else {
                        echo "Invalid password!";
                    }
                } else {
                    echo "Invalid username!";
                }
            } else {
                echo "Error fetching results: " . $conn->error;
            }

            $result->close();
        } else {
            echo "Statement preparation error: " . $conn->error;
        }

        $stmt->close();
    } else {
        echo "Please provide both username and password!";
    }

    if (isset($_POST['username']) && isset($_POST['contact']) && isset($_POST['email']) && isset($_POST['password'])) {
        $newUsername = $_POST['username'];
        $newContactNumber = $_POST['contact'];
        $newEmail = $_POST['email'];
        $newPassword = $_POST['password'];

        $hashedPassword = password_hash($newPassword, PASSWORD_BCRYPT);

        $stmt = $conn->prepare("INSERT INTO user (username, contact, email, password) VALUES (?, ?, ?, ?)");
        if ($stmt) {
            $stmt->bind_param("ssss", $newUsername, $newContact, $newEmail, $hashedPassword);
            $stmt->execute();

            if ($stmt->affected_rows === 1) {
                echo "Registration successful!";
            } else {
                echo "Registration failed!";
            }

            $stmt->close();
        } else {
            echo "Statement preparation error: " . $conn->error;
        }
    } else {
        echo "Please provide username, contact number, email, and password!";
    }
} else {
    echo "Access denied!";
}

$conn->close();
?>