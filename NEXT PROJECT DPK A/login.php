<?php
$host = "localhost";
$user = "root";
$pass = "";
$db = "pracass";

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

$email = $_POST['email'] ?? '';
$password = $_POST['password'] ?? '';

if (empty($email) || empty($password)) {
    echo "Email atau Password tidak boleh kosong.";
    exit();
}

$stmt = $conn->prepare("SELECT email, password FROM dataview WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$stmt->bind_result($fetchedEmail, $hashedPassword);
if ($stmt->fetch()) {
    if (password_verify($password, $hashedPassword)) {
        $username = explode("@", $fetchedEmail)[0];
        echo "success:" . $username;
    } else {
        echo "Password salah.";
    }
} else {
    echo "Email tidak ditemukan.";
}

$stmt->close();
$conn->close();
?>