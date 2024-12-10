function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username != "" && password != "") {
      // Redirect ke halaman selanjutnya
      window.location.href = "beranda_sdh-log.html";
    } else {
      alert("Please fill in all inputs!");
    }
  }