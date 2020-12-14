// function expression

// const tampilNama = function (nama) {
//   return `Halo ${nama}`;
// }

// console.log(tampilNama('esto'))

// const tampilNama = (nama) => {
//   return `Halo ${nama}`;
// }

// console.log(tampilNama('Esto Triramdani Nurlustiawan'));

// const tampilNama = (nama, waktu) => `Selamat ${waktu}, ${nama}!`;

// console.log(tampilNama('Esto', 'malam'));

// const tampilNama = () => `Hello world!`;

let mahasiswa = ['Esto', 'Shoffa', 'Aziz'];

// let jumlahHuruf = mahasiswa.map(function (nama) {
//   return nama.length;
// })

// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map(nama => nama.length);


let jumlahHuruf = mahasiswa.map(nama => ({ nama: nama, jmlHuruf: nama.length }))

console.table(jumlahHuruf);