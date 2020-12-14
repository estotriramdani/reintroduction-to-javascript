// Cara untuk membuat Object pada JavaScript

// 1. Object Literal
// PROBLEM: Tidak efektif untuk objek yang banyak
// let mahasiswa1 = {
//   nama: "Esto",
//   energi: 10,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Halo ${this.nama}, selamat makan.`);
//   }
// }

// let mahasiswa2 = {
//   nama: "Doddy",
//   energi: 20,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Halo ${this.nama}, selamat makan.`);
//   }
// }

// 2. function declaration
// dengan pengembangannya pakai Object.create(),
// Membuat object methodMahasiswa yang hanya disimpan sekali ke memori
// tapi masalahnya harus membuat object lain (yang bakal jadi distraksi)

// const methodMahasiswa = {
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo, ${this.nama}, selamat makan`)
//   },

//   main: function (jam) {
//     this.energi -= jam;
//     console.log(`Halo, ${this.nama}, selamat bermain`)
//   },

//   tidur: function (jam) {
//     this.energi += jam * 2;
//     console.log(`Halo, ${this.nama}, selamat tidur.`)
//   }
// };

// function Mahasiswa(nama, energi) {
//   let mahasiswa = Object.create(methodMahasiswa);
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;
//   return mahasiswa;
// }

// let esto = Mahasiswa('Esto', 10);
// let doddy = Mahasiswa('Doddy', 20);

// versi protypel inheritance
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
// }

// Mahasiswa.prototype.makan = function (porsi) {
//   this.energi += porsi;
//   return `Halo ${this.nama}, selamat makan!`;
// }

// Mahasiswa.prototype.main = function (jam) {
//   this.energi -= jam;
//   return `Halo ${this.nama}, selamat main!`;
// }

// Mahasiswa.prototype.tidur = function (jam) {
//   this.energi += jam * 2;
//   return `Halo ${this.nama}, selamat tidur!`;
// }

// let esto = new Mahasiswa('Esto', 10);

// versi Class
// class Mahasiswa {
//   constructor(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
//   }

//   makan(porsi) {
//     this.energi += porsi;
//     return `Halo ${this.nama}, selamat makan!`;
//   }

//   main(jam) {
//     this.energi -= jam;
//     return `Halo ${this.nama}, selamat main!`;
//   }

//   tidur(jam) {
//     this.energi += jam * 2;
//     return `Halo ${this.nama}, selamat tidur!`;
//   }
// }

// let esto = new Mahasiswa('Esto', 23);
// let ujang = new Mahasiswa('Ujang', 23);


let angka = [];


// // 3. Constructor Function
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;

//   this.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo, ${this.nama}, selamat makan (by construct)`);
//   }

//   this.main = function (jam) {
//     this.energi -= jam;
//     console.log(`Halo, ${this.nama}, selamat bermain (by construct)`);
//   }
// }

// let esto = new Mahasiswa('Esto', 15);


// 4. Object.create();
