document.getElementById("pesan").textContent = "Hello World";
console.log("Hello World");

const namaPengguna = prompt("Masukkan nama Anda:", "");
if (namaPengguna && namaPengguna.trim() !== "") {
    alert("Halo, " + namaPengguna + "!");
    document.getElementById("pesan").textContent = "Selamat datang, " + namaPengguna + ".";
} else {
    alert("Nama belum diisi.");
}

function operasiDasarPrompt() {
  const val1 = prompt("Masukkan angka pertama:");
  const val2 = prompt("Masukkan angka kedua:");
  const num1 = Number(val1);
  const num2 = Number(val2);
  if (val1 === null || val2 === null || val1.trim() === "" || val2.trim() === "" || Number.isNaN(num1) || Number.isNaN(num2)) {
    console.log("Input tidak valid!");
    return;
  }
  operasiDasar(num1, num2);
}
operasiDasarPrompt()

function operasiDasar(a, b) {
    console.log("Bilangan a: ", a)
    console.log("Bilangan b: ", b)
    console.log("Penjumlahan:", a + b);
    console.log("Pengurangan:", a - b);
    console.log("Perkalian:", a * b);
    console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
    console.log("Modulus:", a % b);
}
operasiDasar(9, 4);

const inputNilai = prompt("Masukkan nilai (0–100):");
const nilaiMahasiswa = Number(inputNilai);
if (inputNilai === null || inputNilai.trim() === "" ||
 Number.isNaN(nilaiMahasiswa) || nilaiMahasiswa < 0 || nilaiMahasiswa > 100) {
    alert("Input nilai tidak valid.");
} else if (nilaiMahasiswa >= 60) {
    alert("Lulus");
} else {
    alert("Belum lulus");
}

const inputPilihan = prompt("Masukkan angka 1–5:");
switch (inputPilihan) {
    case "1": alert("Bilangan satu"); break;
    case "2": alert("Bilangan dua"); break;
    case "3": alert("Bilangan tiga"); break;
    case "4": alert("Bilangan empat"); break;
    case "5": alert("Bilangan lima"); break;
    default: alert("Pilihan tidak tersedia");
}

function cekBilangan() {
 const input = document.getElementById("bilangan").value;
 const angka = Number(input);
 const hasil = document.getElementById("hasilBilangan");
 if (input.trim() === "" || !Number.isInteger(angka)) {
    hasil.textContent = "Masukkan bilangan bulat yang valid.";
    } else if (angka % 2 === 0) {
    hasil.textContent = "Bilangan genap";
    } else {
    hasil.textContent = "Bilangan ganjil";
    }
}

function ubahWarnaLatar(warna) {
    document.body.style.backgroundColor = warna;
}

const daftarMenu = document.querySelectorAll(".menu");
daftarMenu.forEach((item) => {
    item.addEventListener("change", hitungTotal);
});
function hitungTotal() {
    let total = 0;
    daftarMenu.forEach((item) => {
    if (item.checked) total += Number(item.value);
    });
    document.getElementById("total").textContent = total.toLocaleString("id-ID");
}

function hitungNilaiAkhir(tugas, uts, uas) {
    return tugas * 0.30 + uts * 0.30 + uas * 0.40;
}
function tentukanPredikat(nilai) {
    if (nilai >= 85) return "A";
    if (nilai >= 75) return "B";
    if (nilai >= 60) return "C";
    if (nilai >= 50) return "D";
    return "E";
}
const tugas = 85;
const uts = 78;
const uas = 88;
const akhir = hitungNilaiAkhir(tugas, uts, uas);
console.log("Nilai akhir:", akhir.toFixed(2));
console.log("Predikat:", tentukanPredikat(akhir));
console.log("Status:", akhir >= 60 ? "Lulus" : "Belum lulus");


function prosesHitungNilai() {
    const inputTugas = document.getElementById("tugas").value;
    const inputUts = document.getElementById("uts").value;
    const inputUas = document.getElementById("uas").value;
    if (inputTugas.trim() === "" || inputUts.trim() === "" || inputUas.trim() === "") {
        alert("Semua kolom nilai harus diisi!");
        return;
    }
    const nilaiTugas = Number(inputTugas);
    const nilaiUts = Number(inputUts);
    const nilaiUas = Number(inputUas);
    if (
        nilaiTugas < 0 || nilaiTugas > 100 ||
        nilaiUts < 0 || nilaiUts > 100 ||
        nilaiUas < 0 || nilaiUas > 100
    ) {
        alert("Nilai harus berada pada rentang 0 - 100!");
        return;
    }
    const nilaiAkhir = hitungNilaiAkhir(nilaiTugas, nilaiUts, nilaiUas);
    const predikat = tentukanPredikat(nilaiAkhir);
    const status = nilaiAkhir >= 60 ? "Lulus" : "Belum lulus";
    document.getElementById("hasilNilaiAkhir").textContent = "Nilai Akhir: " + nilaiAkhir.toFixed(2);
    document.getElementById("hasilPredikat").textContent = "Predikat: " + predikat;
    document.getElementById("hasilStatus").textContent = "Status: " + status;
}

console.log("=== Tabel Perkalian 7 ===");
for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}

function cekGenap(angka) {
  return angka % 2 === 0;
}
console.log("Apakah 4 genap?", cekGenap(4));
console.log("Apakah 7 genap?", cekGenap(7));

function validasiFormKosong() {
  const daftarInput = document.querySelectorAll(".input-wajib");
  const pesanError = document.getElementById("pesanValidasi");
  
  let adaYangKosong = false;

  pesanError.textContent = "";
  daftarInput.forEach((input) => {
    input.style.borderColor = "";
  });

  daftarInput.forEach((input) => {
    if (input.value.trim() === "") {
      adaYangKosong = true;
      input.style.borderColor = "red"; // Beri border merah pada kolom yang kosong
    }
  });

  if (adaYangKosong) {
    pesanError.style.color = "red";
    pesanError.textContent = "Semua kolom wajib diisi, tidak boleh ada yang kosong!";
  } else {
    pesanError.style.color = "green";
    pesanError.textContent = "Form berhasil dikirim! Semua kolom sudah terisi.";
  }
}

function toggleElemen() {
  const elem = document.getElementById("teksSembunyi");
  if (elem.style.display === "none") {
    elem.style.display = "block";
  } else {
    elem.style.display = "none";
  }
}