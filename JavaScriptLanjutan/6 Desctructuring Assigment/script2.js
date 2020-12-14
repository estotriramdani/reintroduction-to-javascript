// destructuring

// function kalkulasi(a, b) {
//   return [a + b, a - b, a * b];
// }

// const [jumlah, kali] = penjumlahanPerkalian(4, 5);
// console.log(jumlah);
// console.log(kali);

// const [tambah, kurang, kali, bagi = "Tidak ada"] = kalkulasi(4, 5);
// console.log(bagi);

// dengan object
// function kalkulasi(a, b) {
//   return {
//     tambah: a + b,
//     kurang: a - b,
//     kali: a * b,
//     bagi: a / b,
//   };
// }

// const { bagi, kali, tambah, kurang } = kalkulasi(4, 5);
// console.log(bagi);

// destructruring funciton arguments

const mhs1 = {
  nama: "Esto",
  umur: 20,
  email: "esto@gmail.com",
  nilai: {
    tugas: 80,
    uts: 85,
    uas: 90,
  },
};

// function cetakMhs(nama, umur) {
//   return `Halo, nama saya ${nama}, saya berumur ${umur} tahun.`;
// }

// console.log(cetakMhs(mhs1.nama, mhs1.umur));

function cetakMhs({ nama, umur, nilai: { tugas, uts, uas } }) {
  return `Halo, nama saya ${nama}, saya berumur ${umur} tahun, dan nilai tugas saya adalah ${tugas}`;
}
console.log(cetakMhs(mhs1));
