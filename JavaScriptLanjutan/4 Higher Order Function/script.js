const angka = [-1, 8, 9, 1, 4, -5, 4, 3, 2, 9];

// mencari angka 3
// // for
// let angkaBaru = [];
// for (i = 0; i < angka.length; i++) {
//   if (angka[i] >= 3) {
//     angkaBaru.push(angka[i]);
//   }
// }

// console.log(angkaBaru);

// filter
// const newAngka = angka.filter((a) => a >= 3);
// console.log(newAngka);

// map
// kalikan semua angka dengan 2
// const newAngka = angka.map((a) => a * 3);
// console.log(newAngka);

// reduce
// jumlahkan seluruh elemen pada array
// const newAngka = angka.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   10
// );
// console.log(newAngka);

// Method chaning
// cari angka  > 5
// kalikan 3
// jumlahkan

const hasil = angka
  .filter((a) => a > 5)
  .map((a) => a * 3)
  .map((a) => a / 2)
  .reduce((acc, cur) => acc + cur);

console.log(hasil);
