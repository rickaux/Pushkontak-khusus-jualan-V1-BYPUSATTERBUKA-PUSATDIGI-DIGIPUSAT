# Pushkontak-khusus-jualan-V1-BYPUSATTERBUKA-PUSATDIGI-DIGIPUSAT
Pushkontak - Khusus Jualan V1 (BYPUSATTERBUKA/PUSATDIGI/DIGIPUSAT) adalah bot untuk mengelola kontak dan melakukan berbagai fungsi pemasaran melalui WhatsApp, seperti mengirim pesan massal, cek produk, pembayaran, dan lainnya. Bot ini juga mendukung integrasi dengan TikTok dan memiliki fitur .ebook (ada (ada beberapa sedang dalam pengembangan).



## Fitur Utama

- **Pushkontak Management**: Mengelola kontak, memfasilitasi pengiriman pesan ke grup atau individu.
- **Produk dan Hosting**: Daftar produk, hosting, panel, dan VPS.
- **Integrasi dengan TikTok**: Untuk memfasilitasi promosi dan integrasi dengan konten TikTok.
- **Pembayaran**: Menyediakan fitur untuk mempermudah pembayaran dalam transaksi jual beli.
- **.ebook** (Dalam Pengembangan): Fitur baru untuk menampilkan daftar ebook (sedang dalam tahap pengembangan).
  
│─═⊱ 「 MENU 」<br>  ─═⬣[⿻<br>
║
│┏⊱ LISTMENU <br>
│𖥂 .owner<br>
│𖥂 .self<br>
│𖥂 .public<br>
│𖥂 .pushkontak<br>
│𖥂 .pushkontak1<br>
│𖥂 .savekontak1<br>
│𖥂 .listgc<br>
│𖥂 .cekidch<br>
│𖥂 .jpm1<br>
│𖥂 .jpm2<br>
│𖥂 .listproduk<br>
│𖥂 .listhosting<br>
│𖥂 .listpanel<br>
│𖥂 .listvps<br>
│𖥂 .done<br>
│𖥂 .tiktok<br>
│𖥂 .payment<br>
│𖥂 .ping<br>
│┗⊱
|┗━━━━━━━━━━━[⿻

### Fitur dalam pengembangan
- **.ebook**: Fitur ini sedang dalam tahap pengembangan untuk menampilkan daftar ebook belum ada fungsi .

## Cara Memodifikasi Pesan Koneksi Bot

Ketika bot terhubung, bot akan mengirimkan pesan berikut:
Untuk mengubah nomor tujuan pesan yang dikirimkan, ubah kode berikut:

````
_0x47241b[_0x1a2e48(0x1ca)]("6283190941023@s.whatsapp.net", { // baris kode untuk mengirim pesan ketika bot terhubung
````

contohnya:
````_0x47241b[_0x1a2e48(0x1ca)]("62XXXXXXXXXX@s.whatsapp.net", { // ganti nomor di sini````


Gantilah ````6283190941023@s.whatsapp.net```` dengan nomor WhatsApp kalian sendiri.
di file index.js line 368


### Next fitur
- **.Modul Academy Crypto** list harga
- **.totalfitur** menampilkan total fitur
- 


# Cara Instalasi Pertama Kali
1. Install FFmpeg <br>
Bot ini memerlukan FFmpeg untuk beberapa fungsi media.

2. Install Node.js <br>
Pastikan Anda sudah menginstal Node.js versi terbaru atau yang lebih lama sesuai dengan kebutuhan bot ini. Anda dapat mengunduhnya <a href="https://nodejs.org/en" target="_blank">Klik Di Sini untuk Mengunjungi Situs</a>.

3. Install Gitbash (Jika belum terinstal) <br>
Gitbash diperlukan untuk memudahkan proses instalasi dan penggunaan bot. Jika belum terpasang, [Anda bisa mengunduhnya disini](https://git-scm.com/downloads).

1. klone github Repo: <br>
        ````git clone https://github.com/rickaux/Pushkontak-khusus-jualan-V1-BYPUSATTERBUKA-PUSATDIGI-DIGIPUSAT.git````
2. Masuk Ke Directory: <br>
    ````cd Pushkontak-khusus-jualan-V1````
3. Installasi Depenensi <br>
   ````npm install````
4. Jalankan Bot <br>
    ````npm start````

### Changelog <br>
[Unreleased] <br>
Fitur baru: 
- Menambahkan fitur .ebook (dalam pengembangan) <br>
Perbaikan: <br>
- Memperbaiki beberapa bug kecil dan meningkatkan stabilitas bot<br>

[1.0.0] - 2024-12-23 <br>
Fitur baru: <br>
Menambahkan menu utama untuk berbagai perintah bot, seperti .owner, .pushkontak, .tiktok, dan lainnya <br>

Menambahkan fitur 
- .savekontak1 untuk menyimpan kontak<br>
- Menambahkan .listproduk untuk menampilkan daftar produk<br>
- Menambahkan .listhosting untuk menampilkan daftar hosting<br>
- Menambahkan .listpanel dan .listvps untuk menampilkan daftar panel dan VPS<br>
- Menambahkan .payment untuk memproses pembayaran<br>
- Menambahkan .ping untuk mengecek koneksi bot<br>

# Perbaikan:<br>
- Menambahkan pengecekan dan validasi pada beberapa perintah<br>
- Memperbaiki bug pada integrasi dengan WhatsApp<br>

### [0.1.0] - 2024-12-01<br>
Fitur baru:<br>
- Memperkenalkan bot dengan perintah dasar seperti .self, .public, .listgc<br>
- Menambahkan sistem untuk memverifikasi ID channel dengan .cekidch<br>
- Menambahkan perintah untuk menghasilkan daftar produk secara otomatis<br>

Perbaikan:<br>
- Menyempurnakan proses penyimpanan kontak<br>
- Perbaikan kecil pada pengaturan file konfigurasi<br>

### [0.0.1] - 2024-11-15<br>
Fitur baru:<br>
- Rilis awal bot dengan beberapa perintah dasar<br>
- Menambahkan kemampuan untuk mengirim pesan otomatis saat bot terhubung
- pemabahan fitur .ebook
