# Lab 5 - JavaScript Dasar dan Manipulasi HTML

**Nama:** Khairi Ramadhan Yudhatama (312510099)  
**Kelas:** Pemrograman Web (I251A)  
**Dosen:** Agung Nugroho, S.Kom., M.Kom.

---

## Tujuan Praktikum

1. Memahami sintaks dasar JavaScript dan cara menyisipkan JavaScript pada HTML.
2. Menggunakan variabel, tipe data, operator, percabangan, perulangan, dan function.
3. Menampilkan informasi melalui console, alert, prompt, dan elemen HTML.
4. Memanipulasi konten serta gaya elemen HTML menggunakan JavaScript.
5. Membuat interaksi sederhana pada form dan melakukan validasi input.
6. Mendokumentasikan pekerjaan praktikum beserta hasil pengujiannya.

---

## Persiapan Praktikum

1. Buat folder kerja bernama `lab5_javascript`.
2. Buat file `index.html` dan `script.js` di dalam folder tersebut.
3. Salin kerangka HTML dasar, lalu pastikan `script.js` terhubung dengan benar.
4. Jalankan `index.html` pada browser dan buka Console (Inspect → Console).
5. Kerjakan setiap latihan secara berurutan dan simpan screenshot hasilnya.

### Kerangka Awal `index.html`

```html
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Praktikum JavaScript</title>
  </head>
  <body>
    <h1>Pengenalan JavaScript</h1>
    <p id="pesan">Konten awal.</p>
    <script src="script.js"></script>
  </body>
</html>
```

**Hasil di browser (sebelum script dijalankan):**

![Screenshot - Tampilan awal sebelum script](screenshots/00-tampilan-awal.png)

---

## Latihan 1 — Menampilkan Output

**Tujuan:** Mengenali cara menampilkan output di halaman dan Console.

Isi `script.js` dengan kode berikut:

```javascript
document.getElementById("pesan").textContent = "Hello World";
console.log("Hello World");
```

**Langkah uji:**

- Jalankan halaman di browser.
- Pastikan teks pada halaman berubah menjadi "Hello World".
- Pastikan pesan "Hello World" tampil di Console.
- Catat perbedaan output pada halaman dan Console.

**Hasil di browser:**

![Screenshot Latihan 1 - Output di halaman](screenshots/01-output-halaman.png)

**Hasil di Console:**

![Screenshot Latihan 1 - Output di Console](screenshots/01-output-console.png)

---

## Latihan 2 — Alert dan Prompt

Tambahkan kode berikut di `script.js`:

```javascript
const namaPengguna = prompt("Masukkan nama Anda:", "");
if (namaPengguna && namaPengguna.trim() !== "") {
  alert("Halo, " + namaPengguna + "!");
  document.getElementById("pesan").textContent =
    "Selamat datang, " + namaPengguna + ".";
} else {
  alert("Nama belum diisi.");
}
```

**Langkah uji:**

- Uji dengan memasukkan nama → muncul alert sambutan dan teks halaman berubah.
- Uji dengan menekan Cancel atau mengosongkan input → muncul alert "Nama belum diisi."

**Hasil uji (nama diisi):**

![Screenshot Latihan 2 - Prompt nama](screenshots/02-prompt-nama.png)

![Screenshot Latihan 2 - Alert sambutan](screenshots/02-alert-sambutan.png)

![Screenshot Latihan 2 - Teks halaman berubah](screenshots/02-teks-selamat-datang.png)

**Hasil uji (Cancel / kosong):**

![Screenshot Latihan 2 - Alert nama belum diisi](screenshots/02-alert-nama-kosong.png)

---

## Latihan 3 — Function dan Operasi Aritmetika

Buat function yang menerima dua bilangan, lalu menampilkan hasil penjumlahan, pengurangan, perkalian, pembagian, dan sisa bagi.

```javascript
function operasiDasar(a, b) {
  console.log("Penjumlahan:", a + b);
  console.log("Pengurangan:", a - b);
  console.log("Perkalian:", a * b);
  console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
  console.log("Modulus:", a % b);
}
operasiDasar(9, 4);
```

**Hasil di Console:**

![Screenshot Latihan 3 - Operasi aritmetika](screenshots/03-operasi-aritmetika.png)

---

## Latihan 4 — Seleksi Kondisi if–else

Buat program yang meminta nilai melalui prompt. Nilai minimal 60 dinyatakan lulus. Perhatikan bahwa `prompt` menghasilkan string sehingga masukan numerik perlu dikonversi.

```javascript
const inputNilai = prompt("Masukkan nilai (0–100):");
const nilaiMahasiswa = Number(inputNilai);

if (
  inputNilai === null ||
  inputNilai.trim() === "" ||
  Number.isNaN(nilaiMahasiswa) ||
  nilaiMahasiswa < 0 ||
  nilaiMahasiswa > 100
) {
  alert("Input nilai tidak valid.");
} else if (nilaiMahasiswa >= 60) {
  alert("Lulus");
} else {
  alert("Belum lulus");
}
```

**Hasil uji (Lulus):**

![Screenshot Latihan 4 - Input nilai lulus](screenshots/04-input-lulus.png)

![Screenshot Latihan 4 - Alert Lulus](screenshots/04-alert-lulus.png)

**Hasil uji (Belum lulus):**

![Screenshot Latihan 4 - Input nilai belum lulus](screenshots/04-input-belum-lulus.png)

![Screenshot Latihan 4 - Alert Belum lulus](screenshots/04-alert-belum-lulus.png)

---

## Latihan 5 — Seleksi Kondisi switch

Minta pengguna memasukkan angka 1–5 dan tampilkan nama bilangan menggunakan `switch`.

```javascript
const inputPilihan = prompt("Masukkan angka 1–5:");
switch (inputPilihan) {
  case "1":
    alert("Bilangan satu");
    break;
  case "2":
    alert("Bilangan dua");
    break;
  case "3":
    alert("Bilangan tiga");
    break;
  case "4":
    alert("Bilangan empat");
    break;
  case "5":
    alert("Bilangan lima");
    break;
  default:
    alert("Pilihan tidak tersedia");
}
```

**Hasil uji (angka valid):**

![Screenshot Latihan 5 - Input angka valid](screenshots/05-input-valid.png)

![Screenshot Latihan 5 - Alert bilangan](screenshots/05-alert-bilangan.png)

**Hasil uji (angka di luar range):**

![Screenshot Latihan 5 - Input di luar range](screenshots/05-input-invalid.png)

![Screenshot Latihan 5 - Alert pilihan tidak tersedia](screenshots/05-alert-tidak-tersedia.png)

---

## Latihan 6 — Form Bilangan Genap atau Ganjil

Tambahkan form berikut pada `body` di `index.html`:

```html
<label for="bilangan">Masukkan bilangan bulat:</label>
<input type="number" id="bilangan" step="1" />
<button type="button" onclick="cekBilangan()">Periksa</button>
<p id="hasilBilangan"></p>
```

Tambahkan function di `script.js`:

```javascript
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
```

**Uji dengan:** angka positif, angka negatif, nol, bilangan desimal, dan input kosong.

**Hasil di browser:**

![Screenshot Latihan 6 - Bilangan ganjil](screenshots/06-bilangan-ganjil.png)

![Screenshot Latihan 6 - Bilangan genap](screenshots/06-bilangan-genap.png)

---

## Latihan 7 — Mengubah Warna Halaman

Buat tiga tombol yang mengubah warna latar halaman. Gunakan satu function dengan parameter agar kode tidak berulang.

Tambahkan tombol di `index.html`:

```html
<button type="button" onclick="ubahWarnaLatar('lightgreen')">
  Latar Hijau
</button>
<button type="button" onclick="ubahWarnaLatar('white')">Latar Putih</button>
<button type="button" onclick="ubahWarnaLatar('lightyellow')">
  Latar Kuning
</button>
```

Tambahkan function di `script.js`:

```javascript
function ubahWarnaLatar(warna) {
  document.body.style.backgroundColor = warna;
}
```

**Hasil di browser:**

![Screenshot Latihan 7 - Latar putih](screenshots/07-latar-putih.png)

![Screenshot Latihan 7 - Latar hijau](screenshots/07-latar-hijau.png)

![Screenshot Latihan 7 - Latar kuning](screenshots/07-latar-kuning.png)

---

## Latihan 8 — DOM dan Checkbox Menu Makanan

Buat daftar menu menggunakan checkbox. Total harga berubah otomatis ketika pilihan dicentang atau dilepas.

Tambahkan HTML di `index.html` (pastikan `<script src="script.js"></script>` diletakkan menjelang akhir `body`):

```html
<h3>Daftar Menu Makanan</h3>
<label
  ><input type="checkbox" class="menu" value="5000" /> Ayam Goreng —
  Rp5.000</label
><br />
<label><input type="checkbox" class="menu" value="500" /> Tempe — Rp500</label
><br />
<label
  ><input type="checkbox" class="menu" value="2500" /> Telur Dadar —
  Rp2.500</label
><br />
<p>Total: Rp<span id="total">0</span></p>
```

Tambahkan kode di `script.js`:

```javascript
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
```

**Hasil di browser:**

![Screenshot Latihan 8 - Menu makanan dan total](screenshots/08-menu-makanan.png)

---

## Mini Project — Kalkulator Nilai Mahasiswa

Kembangkan program yang menerima nilai tugas, UTS, dan UAS, menghitung nilai akhir, menentukan predikat, serta menampilkan status kelulusan.

### Function perhitungan (di `script.js`)

```javascript
function hitungNilaiAkhir(tugas, uts, uas) {
  return tugas * 0.3 + uts * 0.3 + uas * 0.4;
}

function tentukanPredikat(nilai) {
  if (nilai >= 85) return "A";
  if (nilai >= 75) return "B";
  if (nilai >= 60) return "C";
  if (nilai >= 50) return "D";
  return "E";
}

// Contoh perhitungan di Console
const tugas = 85;
const uts = 78;
const uas = 88;
const akhir = hitungNilaiAkhir(tugas, uts, uas);

console.log("Nilai akhir:", akhir.toFixed(2));
console.log("Predikat:", tentukanPredikat(akhir));
console.log("Status:", akhir >= 60 ? "Lulus" : "Belum lulus");
```

### Form input di `index.html`

```html
<h2>Kalkulator Nilai Mahasiswa</h2>
<form id="formNilai">
  <label for="tugas">Nilai Tugas (0-100):</label><br />
  <input type="number" id="tugas" min="0" max="100" step="any" /><br /><br />
  <label for="uts">Nilai UTS (0-100):</label><br />
  <input type="number" id="uts" min="0" max="100" step="any" /><br /><br />
  <label for="uas">Nilai UAS (0-100):</label><br />
  <input type="number" id="uas" min="0" max="100" step="any" /><br /><br />
  <button type="button" onclick="prosesHitungNilai()">Hitung Nilai</button>
</form>
<h3>Hasil:</h3>
<p id="hasilNilaiAkhir">Nilai Akhir: -</p>
<p id="hasilPredikat">Predikat: -</p>
<p id="hasilStatus">Status: -</p>
```

### Function proses di `script.js`

```javascript
function prosesHitungNilai() {
  const inputTugas = document.getElementById("tugas").value;
  const inputUts = document.getElementById("uts").value;
  const inputUas = document.getElementById("uas").value;

  if (
    inputTugas.trim() === "" ||
    inputUts.trim() === "" ||
    inputUas.trim() === ""
  ) {
    alert("Semua kolom nilai harus diisi!");
    return;
  }

  const nilaiTugas = Number(inputTugas);
  const nilaiUts = Number(inputUts);
  const nilaiUas = Number(inputUas);

  if (
    nilaiTugas < 0 ||
    nilaiTugas > 100 ||
    nilaiUts < 0 ||
    nilaiUts > 100 ||
    nilaiUas < 0 ||
    nilaiUas > 100
  ) {
    alert("Nilai harus berada pada rentang 0 - 100!");
    return;
  }

  const nilaiAkhir = hitungNilaiAkhir(nilaiTugas, nilaiUts, nilaiUas);
  const predikat = tentukanPredikat(nilaiAkhir);
  const status = nilaiAkhir >= 60 ? "Lulus" : "Belum lulus";

  document.getElementById("hasilNilaiAkhir").textContent =
    "Nilai Akhir: " + nilaiAkhir.toFixed(2);
  document.getElementById("hasilPredikat").textContent =
    "Predikat: " + predikat;
  document.getElementById("hasilStatus").textContent = "Status: " + status;
}
```

**Hasil di Console (contoh hardcode):**

![Screenshot Mini Project - Hasil Console](screenshots/09-console-nilai.png)

**Hasil di halaman (beberapa skenario):**

![Screenshot Mini Project - Skenario 1 (Lulus)](screenshots/09-nilai-lulus-1.png)

![Screenshot Mini Project - Skenario 2 (Lulus)](screenshots/09-nilai-lulus-2.png)

![Screenshot Mini Project - Skenario 3 (Belum lulus)](screenshots/09-nilai-belum-lulus.png)

---

## Eksperimen Mandiri

### 1. Ubah Latihan 3 agar menerima dua nilai dari prompt

```javascript
function operasiDasarPrompt() {
  const val1 = prompt("Masukkan angka pertama:");
  const val2 = prompt("Masukkan angka kedua:");
  const num1 = Number(val1);
  const num2 = Number(val2);

  if (
    val1 === null ||
    val2 === null ||
    val1.trim() === "" ||
    val2.trim() === "" ||
    Number.isNaN(num1) ||
    Number.isNaN(num2)
  ) {
    console.log("Input tidak valid!");
    return;
  }
  operasiDasar(num1, num2);
}
operasiDasarPrompt();
```

**Hasil:**

![Screenshot Eksperimen 1 - Prompt angka](screenshots/10-eksperimen-prompt.png)

![Screenshot Eksperimen 1 - Hasil Console](screenshots/10-eksperimen-console.png)

### 2. Perulangan tabel perkalian angka 7 (1 sampai 10)

```javascript
console.log("=== Tabel Perkalian 7 ===");
for (let i = 1; i <= 10; i++) {
  console.log(`7 x ${i} = ${7 * i}`);
}
```

**Hasil di Console:**

![Screenshot Eksperimen 2 - Tabel perkalian 7](screenshots/11-tabel-perkalian-7.png)

### 3. Function `cekGenap(angka)`

```javascript
function cekGenap(angka) {
  return angka % 2 === 0;
}
console.log("Apakah 4 genap?", cekGenap(4));
console.log("Apakah 7 genap?", cekGenap(7));
```

**Hasil di Console:**

![Screenshot Eksperimen 3 - cekGenap](screenshots/12-cek-genap.png)

### 4. Validasi form agar kolom tidak boleh kosong

**HTML:**

```html
<div style="border: 1px solid #ccc; padding: 15px; margin-top: 20px;">
  <h3>Form Input Data (Wajib Diisi)</h3>
  <form id="formValidasi">
    <div>
      <label for="namaLengkap">Nama Lengkap:</label><br />
      <input type="text" id="namaLengkap" class="input-wajib" /><br /><br />
    </div>
    <div>
      <label for="emailUser">Email:</label><br />
      <input type="email" id="emailUser" class="input-wajib" /><br /><br />
    </div>
    <div>
      <label for="alamatUser">Alamat:</label><br />
      <input type="text" id="alamatUser" class="input-wajib" /><br /><br />
    </div>
    <button type="button" onclick="validasiFormKosong()">Kirim Data</button>
  </form>
  <p id="pesanValidasi" style="color: red; font-weight: bold;"></p>
</div>
```

**JavaScript:**

```javascript
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
      input.style.borderColor = "red";
    }
  });

  if (adaYangKosong) {
    pesanError.style.color = "red";
    pesanError.textContent =
      "Semua kolom wajib diisi, tidak boleh ada yang kosong!";
  } else {
    pesanError.style.color = "green";
    pesanError.textContent = "Form berhasil dikirim! Semua kolom sudah terisi.";
  }
}
```

**Hasil di browser:**

![Screenshot Eksperimen 4 - Validasi form kosong](screenshots/13-validasi-form.png)

### 5. Ubah Latihan 8 — tambah minimal dua pilihan menu

Tambahkan checkbox baru di `index.html`:

```html
<label
  ><input type="checkbox" class="menu" value="3000" /> Es Teh Manis —
  Rp3.000</label
><br />
<label
  ><input type="checkbox" class="menu" value="15000" /> Nasi Goreng —
  Rp15.000</label
><br />
```

**Hasil di browser:**

![Screenshot Eksperimen 5 - Menu tambahan](screenshots/14-menu-tambahan.png)

### 6. Tombol untuk menyembunyikan / menampilkan elemen HTML

**HTML:**

```html
<p id="teksSembunyi">Teks ini bisa disembunyikan dan ditampilkan kembali.</p>
<button type="button" onclick="toggleElemen()">
  Sembunyikan / Tampilkan Pesan
</button>
```

**JavaScript:**

```javascript
function toggleElemen() {
  const elem = document.getElementById("teksSembunyi");
  if (elem.style.display === "none") {
    elem.style.display = "block";
  } else {
    elem.style.display = "none";
  }
}
```

**Hasil di browser:**

![Screenshot Eksperimen 6 - Elemen terlihat](screenshots/15-elemen-terlihat.png)

![Screenshot Eksperimen 6 - Elemen disembunyikan](screenshots/15-elemen-disembunyikan.png)

---

# Pertanyaan dan Tugas

---

### 1. Jelaskan perbedaan `console.log()`, `alert()`, `prompt()`, dan `textContent`/`innerHTML`.

- **`console.log()`**  
  Menampilkan output atau pesan ke **Console** browser (bisa dilihat lewat Inspect → Console). Digunakan terutama untuk debugging. Tidak mengganggu tampilan halaman yang dilihat pengguna.

- **`alert()`**  
  Menampilkan kotak dialog pop-up berisi pesan. Pengguna harus menekan tombol **OK** agar dialog hilang. Sifatnya mengganggu (blocking).

- **`prompt()`**  
  Menampilkan kotak dialog pop-up yang meminta masukan teks dari pengguna. Mengembalikan string yang diketik user, atau `null` jika user menekan Cancel.

- **`textContent` dan `innerHTML`**  
  Digunakan untuk mengubah isi elemen HTML.
  - `textContent` → hanya menyisipkan teks polos (lebih aman).
  - `innerHTML` → bisa menyisipkan teks beserta tag HTML.

---

### 2. Apa perbedaan `let` dan `const`? Berikan contoh.

| Keyword | Sifat                                                             | Contoh                                       |
| ------- | ----------------------------------------------------------------- | -------------------------------------------- |
| `let`   | Nilainya **bisa diubah** (mutable)                                | `let skor = 10;`<br>`skor = 20; // berhasil` |
| `const` | Nilainya **tidak bisa diubah** setelah diinisialisasi (immutable) | `const pi = 3.14;`<br>`pi = 3.15; // Error`  |

**Catatan:**

- Gunakan `const` secara default jika nilai tidak akan berubah.
- Gunakan `let` hanya jika nilai variabel memang perlu diubah.

---

### 3. Apa perbedaan operator `==` dan `===`?

| Operator | Nama            | Perilaku                                                                            | Contoh                |
| -------- | --------------- | ----------------------------------------------------------------------------------- | --------------------- |
| `==`     | Loose Equality  | Membandingkan nilai **tanpa** memperhatikan tipe data (dilakukan konversi otomatis) | `'5' == 5` → `true`   |
| `===`    | Strict Equality | Membandingkan nilai **beserta** tipe datanya. Harus sama persis                     | `'5' === 5` → `false` |

**Rekomendasi:** Selalu gunakan `===` agar kode lebih aman dan menghindari bug akibat konversi tipe yang tidak disengaja.

---

### 4. Jelaskan fungsi `if–else` dan `switch`. Kapan masing-masing dapat digunakan?

**`if–else`**

- Fungsi: Mengevaluasi kondisi berbasis logika boolean (`true`/`false`).
- Kapan digunakan:
  - Kondisi bertingkat atau kompleks
  - Pengujian rentang nilai (contoh: `nilai >= 60`)
  - Kondisi yang melibatkan operator logika (`&&`, `||`, `!`)

**`switch`**

- Fungsi: Memilih satu blok kode berdasarkan pencocokan nilai yang **persis** (exact match).
- Kapan digunakan:
  - Ada banyak pilihan diskrit pada satu variabel yang sama
  - Contoh: menu pilihan 1–5, nama hari, status, dll.

---

### 5. Apa fungsi parameter dan `return` dalam function?

- **Parameter**  
  Variabel penampung yang menerima nilai masukan (input) dari luar saat function dipanggil.

- **`return`**  
  Instruksi untuk mengembalikan hasil proses/perhitungan dari dalam function ke tempat function tersebut dipanggil.

**Contoh:**

```javascript
function hitungLuas(panjang, lebar) {
  // panjang & lebar = parameter
  return panjang * lebar; // mengembalikan hasil
}

const hasil = hitungLuas(8, 4); // hasil = 32
```

---

### 6. Bagaimana JavaScript memilih elemen HTML menggunakan `document.getElementById()`?

JavaScript mencari dan mengambil **satu elemen** dari dokumen HTML berdasarkan atribut `id` yang unik.

**Cara kerja:**

1. Browser membaca HTML dan membangun DOM (Document Object Model).
2. Saat `document.getElementById("pesan")` dijalankan, JavaScript mencari elemen yang memiliki `id="pesan"`.
3. Jika ditemukan, elemen tersebut dikembalikan sehingga bisa dimanipulasi (mengubah teks, style, dll).

**Contoh:**

```html
<p id="pesan">Konten awal.</p>
```

```javascript
const elemen = document.getElementById("pesan");
elemen.textContent = "Halo, JavaScript!";
```

---

### 7. Buat script untuk memvalidasi form agar nama tidak kosong dan nilai berada pada rentang 0–100.

**HTML:**

```html
<label for="nama">Nama:</label>
<input type="text" id="nama" />

<label for="nilai">Nilai (0–100):</label>
<input type="number" id="nilai" min="0" max="100" />

<button type="button" onclick="validasiForm()">Kirim</button>
<p id="hasilValidasi"></p>
```

**JavaScript:**

```javascript
function validasiForm() {
  const nama = document.getElementById("nama").value.trim();
  const nilaiInput = document.getElementById("nilai").value;
  const nilai = Number(nilaiInput);
  const hasil = document.getElementById("hasilValidasi");

  // Validasi nama tidak kosong
  if (nama === "") {
    hasil.textContent = "Nama tidak boleh kosong!";
    hasil.style.color = "red";
    return;
  }

  // Validasi nilai harus angka dan berada di rentang 0–100
  if (
    nilaiInput.trim() === "" ||
    Number.isNaN(nilai) ||
    nilai < 0 ||
    nilai > 100
  ) {
    hasil.textContent = "Nilai harus berupa angka antara 0 sampai 100!";
    hasil.style.color = "red";
    return;
  }

  // Jika semua valid
  hasil.textContent = `Data valid. Nama: ${nama}, Nilai: ${nilai}`;
  hasil.style.color = "green";
}
```

## Cara Menjalankan

1. Clone repository ini:
   ```bash
   git clone https://github.com/AyamSerundeng/Lab5Web.git
   ```

````

2. Buka folder project.
3. Buka file `index.html` di browser (bisa double-click atau gunakan Live Server di VS Code).
4. Buka DevTools (F12 / Inspect) → tab **Console** untuk melihat output `console.log`.

---

## Struktur File

```
Lab5Web/
├── index.html
├── script.js
├── README.md
└── screenshots/          ← letakkan semua screenshot di sini
    ├── 00-tampilan-awal.png
    ├── 01-output-halaman.png
    ├── 01-output-console.png
    ├── ...
    └── 15-elemen-disembunyikan.png
```

---
````
