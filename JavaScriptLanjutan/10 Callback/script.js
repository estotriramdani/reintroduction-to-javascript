// Callback
// Synchronous callback
// function halo(nama) {
//   alert(`hallo ${nama}`);
// }

// function tampilkanPesan(callback) {
//   const nama = prompt("Masukkan nama: ");
//   callback(nama);
// }

// tampilkanPesan((nama) => {
//   alert(`Halo, ${nama}`);
// });

// const mhs = [
//   {
//     nama: "Sandhika Galih",
//     nrp: "03020102",
//     email: "sandhikagalih@unpas.ac.id",
//     jurusan: "Teknik Informatika",
//     idDosenWali: 1,
//   },
//   {
//     nama: "Doddy Ferdiansyah",
//     nrp: "030212414",
//     email: "doddy@unpas.ac.id",
//     jurusan: "Teknik Informatika",
//     idDosenWali: 2,
//   },
//   {
//     nama: "Erik",
//     nrp: "10204010",
//     email: "erik@unpas.ac.id",
//     jurusan: "Teknik Informatika",
//     idDosenWali: 3,
//   },
// ];

// console.log("mulai");
// mhs.forEach((m) => {
//   console.log(m.nama)
// });
// console.log("selesai");

//  ======= Asynchronous Callback ======
// function getDataMahasiswa(url, success, error) {
//   let xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         success(xhr.response);
//       } else if (xhr.status === 404) {
//         error();
//       }
//     }
//   };

//   xhr.open("get", url);
//   xhr.send();
// }

// console.log("mulai");

// getDataMahasiswa(
//   "mahasiswa.json",
//   (results) => {
//     const mhs = JSON.parse(results);
//     mhs.forEach((m) => console.log(m.nama));
//   },
//   () => {}
// );

// console.log("selesai");

// === with jQuery ===
console.log("mulai");

$.ajax({
  url: "mahasiswa.json",
  success: (mhs) => {
    mhs.forEach((m) => console.log(m.nama));
  },
  error: (e) => {
    console.log(e.responseText);
  },
});

console.log("selesai");
