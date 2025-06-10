document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
        alert("Email dan password wajib diisi!");
        return;
    }

    fetch("login.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
    })
    .then(response => response.text())
    .then(data => {
        if (data.startsWith("success:")) {
            const username = data.split(":")[1];
            alert("Login berhasil! Selamat datang, " + username);
            window.location.href = "index2.html?username=" + encodeURIComponent(username);
        } else {
            alert("Login gagal: " + data);
        }
    })
    .catch(error => console.error("Error:", error));
});