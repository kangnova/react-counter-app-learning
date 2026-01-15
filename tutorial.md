# Tutorial Lengkap: Membangun React Counter App
**Panduan Khusus untuk Developer PHP**

Dokumen ini merangkum perjalanan kita membangun aplikasi React pertama, dengan penjelasan yang menggunakan analogi PHP agar lebih mudah dipahami.

---

## 1. Konsep Dasar: Pola Pikir (Mindset)

| Fitur | PHP Tradisional | React Modern |
| :--- | :--- | :--- |
| **Cara Kerja** | **Server-side Rendering**: Setiap klik link/tombol me-refresh halaman. Server meracik HTML baru dan mengirimnya ke browser. | **Client-side Rendering**: Halaman hanya dimuat sekali. Selanjutnya, JavaScript mengubah tampilan secara instan di browser (Memori). |
| **Variabel** | Hidup seumur "Request". Mati setelah halaman tampil. | Hidup seumur "Sesi Browser". Bertahan di memori (State) selama tab tidak direfresh. |
| **Struktur** | File `.php` campur HTML & Logika. | Komponen `.jsx` yang terisolasi dan modular. |

---

## 2. Langkah 1: Instalasi & Environment (Vite)

Kita menggunakan **Vite** sebagai alat bantu (build tool).

*   **Analogi**: Jika PHP Native itu coding manual, **Vite** itu seperti gabungan **Composer** (manajemen paket) + **Apache/Nginx Lokal** yang super cepat.
*   **Perintah Utama**:
    ```bash
    npm create vite@latest . -- --template react  # Setup kerangka proyek
    npm install                                   # Download library (mirip `composer install`)
    npm run dev                                   # Nyalakan server lokal
    ```

---

## 3. Langkah 2: Komponen & JSX

Di React, kita memecah UI menjadi bagian kecil bernama **Component**.

### Struktur File Penting
1.  **`index.html`**: Halaman utama. Hanya kerangka kosong dengan `<div id="root">`.
2.  **`src/main.jsx`**: Pintu masuk utama (Bootstrapper). Menganalogikan `index.php` di framework MVC yang memanggil Controller utama.
3.  **`src/App.jsx`**: Komponen induk (Parent). Halaman utama aplikasi kita.

### Membuat Komponen (`Counter.jsx`)
Kode React ditulis dalam **JSX** (JavaScript XML), yaitu menulis HTML langsung di dalam fungsi JavaScript.

```jsx
// src/Counter.jsx
function Counter() {
    return (
        <div>
            <h2>Halo, saya komponen!</h2>
        </div>
    )
}
export default Counter; // Agar bisa di-import file lain
```

*   **Analogi PHP**: Mirip membuat file `includes/counter_widget.php` yang nantinya di-include di halaman utama.
*   **Cara Pakai**: Di `App.jsx`, kita import: `import Counter from './Counter'`.

---

## 4. Langkah 3: State & Interactive (`useState`)

Ini adalah jantungnya React. Bagaimana cara membuat angka berubah saat tombol diklik?

### PHP vs React
*   **PHP**: `$angka++` -> Simpan ke Database/Session -> Refresh Halaman -> Tampilkan `$angka` baru.
*   **React**: `setAngka(angka + 1)` -> React otomatis mendeteksi perubahan -> Update tulisan di layar SECARA INSTAN.

### Kode Implementasi
```jsx
import { useState } from 'react' // Import hook "Ingatan"

function Counter() {
    // [namaVariabel, fungsiPengubah] = useState(nilaiAwal)
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Skor: {count}</p>
            {/* Saat klik, panggil fungsi setter */}
            <button onClick={() => setCount(count + 1)}>
                Tambah
            </button>
        </div>
    )
}
```

---

## 5. Langkah 4: Styling (CSS)

Styling di React modern (Vite) sangat mudah.

*   **Analogi**: Tidak perlu `<link rel="stylesheet">` manual di HTML. Cukup **import** file CSS di file JS/JSX Anda.
*   **Implementasi**:
    1.  Buat file `App.css`.
    2.  Di `App.jsx` (atau `main.jsx`), tulis: `import './App.css'`.
    3.  Gunakan `className="..."` di HTML (ingat: di JSX pakai `className`, bukan `class`).

---

## 6. Langkah 5: Deployment ke GitHub

Menyimpan kode ke awan (Cloud) untuk portofolio.

### Kamus Git Sederhana
1.  **`git add .`**
    *   *Arti*: "Masukan semua file baru/ubah ke dalam kardus paket."
2.  **`git commit -m "Pesan"`**
    *   *Arti*: "Lakban kardusnya dan kasih label. Simpan snapshot ini."
3.  **`git push -u origin main`**
    *   *Arti*: "Kirim paket ke Gudang Pusat (GitHub)."

---

## Rangkuman Kode Akhir

### `src/App.jsx`
```jsx
import './App.css'
import Counter from './Counter'

function App() {
  return (
    <div>
      <h1>Aplikasi Penghitung Saya</h1>
      <Counter />
    </div>
  )
}
export default App
```

### `src/Counter.jsx`
```jsx
import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="card">
      <div className="counter-display">{count}</div>
      <div className="button-group">
        <button className="subtract" onClick={() => setCount(count - 1)}>- Kurangi</button>
        <button className="reset" onClick={() => setCount(0)}>Reset</button>
        <button className="add" onClick={() => setCount(count + 1)}>Tambah +</button>
      </div>
    </div>
  )
}
export default Counter
```

Semoga panduan ini membantu perjalanan transisi Anda menjadi Fullstack Developer! 🚀
