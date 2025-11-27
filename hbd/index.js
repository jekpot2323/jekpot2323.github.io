// script tombol login
document.getElementById("loginBtn").addEventListener("click", function () {
    Swal.fire({
        icon: "success",
        title: "Yeay! Login berhasil 💗",
        text: "langsung kita masukin kamu ke halaman spesial...",
        showConfirmButton: false,
        timer: 1500,
    }).then(function () {
        window.location.href = "birthday.html";
    });
});