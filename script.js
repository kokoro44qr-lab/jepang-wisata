// Menampilkan tanggal otomatis di banner
document.addEventListener("DOMContentLoaded", () => {
  const tanggal = document.getElementById("tanggal");
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  tanggal.textContent = "Konnichiwaa! " + now.toLocaleDateString('id-ID', options);

  // Interaksi klik judul
  const banner = document.querySelector(".banner h1");
  banner.addEventListener("click", () => {
    alert("Selamat menjelajah Wisata Jepang!");
  });
});
