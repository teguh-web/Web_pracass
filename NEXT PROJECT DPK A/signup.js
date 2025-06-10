document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value.trim();

    if (!email || !password) {
        alert("Email dan password wajib diisi!");
        return;
    }

    fetch("signup.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
    })
    .then(response => response.text())
    .then(data => {
        if (data === "success") {
            alert("Pendaftaran berhasil! Silakan login.");
            window.location.href = "login.html";
        } else {
            alert("Gagal daftar: " + data);
        }
    })
    .catch(error => console.error("Error:", error));
});