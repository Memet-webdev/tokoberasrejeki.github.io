function su() {
    // Ambil nilai password dan konfirmasi password dari input
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    // Cek jika salah satu input kosong
    if (password === "" || confirmPassword === "") {
        alert("Please fill in all inputs!");
        return; // Keluar dari fungsi
    }

    // Cek jika password dan konfirmasi tidak sama
    if (password !== confirmPassword) {
        alert("Password and Confirm Password must be the same!");
        return; // Keluar dari fungsi
    }

    // Validasi panjang password
    if (password.length < 5 || password.length > 10) {
        alert("Password must consist of 5 to 10 characters!");
        return; // Keluar dari fungsi
    }

    // Validasi apakah password mengandung angka
    var hasNumber = /\d/; // RegEx untuk memeriksa angka
    if (!hasNumber.test(password)) {
        alert("Password must contain at least one number!");
        return; // Keluar dari fungsi
    }

    // Redirect ke halaman selanjutnya jika semua validasi berhasil
    window.location.href = "beranda_sdh-log.html";
}