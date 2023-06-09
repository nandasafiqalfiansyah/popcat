var counter = 0;
var popcat = document.getElementById("popcat");
var counterElement = document.getElementById("counter");
var images = ["./img/popcat1.png", "./img/popcat2.jpg"]; // Daftar gambar yang akan diganti

popcat.addEventListener("click", function () {
  counter++;
  counterElement.textContent = "Pop count: " + counter;

  var currentImageIndex = counter % images.length; // Menghitung indeks gambar saat ini
  popcat.src = images[currentImageIndex]; // Mengganti gambar
});
