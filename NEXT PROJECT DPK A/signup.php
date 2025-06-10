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
    echo "Email dan password wajib diisi.";
    exit();
}

$stmt = $conn->prepare("SELECT id FROM dataview WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$stmt->store_result();
if ($stmt->num_rows > 0) {
    echo "Email sudah terdaftar.";
    exit();
}
$stmt->close();

$hashedPassword = password_hash($password, PASSWORD_BCRYPT);

$stmt = $conn->prepare("INSERT INTO dataview (email, password) VALUES (?, ?)");
$stmt->bind_param("ss", $email, $hashedPassword);
if ($stmt->execute()) {
    echo "success";
} else {
    echo "Gagal menyimpan data.";
}

$stmt->close();
$conn->close();
?>