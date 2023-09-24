// Mengimpor modul readline untuk berinteraksi dengan pengguna melalui terminal
const readline = require('readline');

// Membuat antarmuka readline
const rl = readline.createInterface({
    input: process.stdin,  // Masukan dari terminal
    output: process.stdout  // Keluaran ke terminal
});

// Menanyakan pengguna untuk memasukkan bilangan genap
rl.question("Masukkan bilangan genap: ", (input) => {
    // Mengonversi input pengguna ke tipe data bilangan bulat
    const x = parseInt(input);

    // Memeriksa apakah input adalah bilangan bulat
    if (isNaN(x)) {
        console.log("Input yang Anda masukkan bukan bilangan bulat");
    } else if (x < 0) {
        // Memeriksa apakah input negatif
        console.log("Tidak bisa input bilangan negatif");
    } else if (x % 2 !== 0) {
        // Memeriksa apakah input ganjil
        console.log("Tidak bisa input bilangan ganjil");
    } else {
        // Menghitung akar pangkat 2 dari input
        const result = Math.sqrt(x);
        console.log(`Akar pangkat 2 dari ${x} adalah ${result}`);
    }

    // Menutup antarmuka readline setelah selesai
    rl.close();
});
