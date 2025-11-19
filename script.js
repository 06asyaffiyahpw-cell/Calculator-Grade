/*
    SMARTGRADE – Cara Kerja Aplikasi:
    1. Pengguna menginput nilai Tugas, UTS, dan UAS.
    2. Sistem menghitung nilai akhir menggunakan bobot:
       - Tugas = 30%
       - UTS   = 30%
       - UAS   = 40%
    3. Sistem menghasilkan:
       - Nilai akhir (0–100)
       - Grade huruf (A, B, C, D, E)
    4. Hasil ditampilkan otomatis di halaman.
*/

function hitungNilai() {
    let tugas = parseFloat(document.getElementById("tugas").value);
    let uts = parseFloat(document.getElementById("uts").value);
    let uas = parseFloat(document.getElementById("uas").value);

    if (isNaN(tugas) || isNaN(uts) || isNaN(uas)) {
        document.getElementById("hasil").innerHTML = "⚠ Semua nilai harus diisi!";
        return;
    }

    // Perhitungan nilai akhir dengan bobot
    let nilaiAkhir = (tugas * 0.30) + (uts * 0.30) + (uas * 0.40);

    // Menentukan grade huruf
    let grade = "";
    if (nilaiAkhir >= 85) grade = "A";
    else if (nilaiAkhir >= 75) grade = "B";
    else if (nilaiAkhir >= 65) grade = "C";
    else if (nilaiAkhir >= 55) grade = "D";
    else grade = "E";

    // Tampilkan hasil
    document.getElementById("hasil").innerHTML =
        `<b>Nilai Akhir:</b> ${nilaiAkhir.toFixed(2)}<br>
         <b>Grade:</b> ${grade}`;
}
