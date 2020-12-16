// for..of
// const mhs = ["Sandhika", "Doddy", "Erik"];

// ====== array =======
// for (let i = 0; i < mhs.length; i++) {
//   console.log(mhs[i]);
// }

// mhs.forEach((m) => console.log(m));

// for (const m of mhs) {
//   console.log(m);
// }

// ======= String ======
// const nama = "Esto";

// for (const n of nama) {
//   console.log(n);
// }

// const mhs = ["Sandhika", "Doddy", "Erik"];

// mhs.forEach((m, i) => {
//   console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// });

// for (const [i, m] of mhs.entries()) {
//   console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// }

// ======= NodeList =======
// const liNama = document.querySelectorAll(".nama");
// liNama.forEach((n) => console.log(n.innerHTML));
// for (n of liNama) {
//   console.log(n.innerHTML);
// }

// ====== arguments ======
// function jumlahkanAngka() {
//   // return arguments.reduce((a, i) => a + i);
//   // arguments.forEach((a) => (jumlah += a));
//   let jumlah = 0;
//   for (a of arguments) {
//     jumlah += a;
//   }
//   return jumlah;
// }

// console.log(jumlahkanAngka(1, 2, 3, 4, 10));

// ==========================

// for...in
const mhs = {
  nama: "Esto",
  umur: 20,
  email: "esto@gmail.com",
};

for (m in mhs) {
  console.log(m);
}
