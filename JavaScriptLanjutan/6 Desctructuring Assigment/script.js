// destructuring assignment/variable

// desctructuring array

// const perkenalan = ["Halo", "nama", "saya", "Esto"];

// const [salam, satu, dua, nama] = perkenalan;

// skipping items
// const [salam, , , nama] = perkenalan;

// console.log(nama);

// swap items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// return value pada function
// function coba() {
//   return [1, 2];
// }
// const [a, b] = coba();
// console.log(b);

// Rest Parameter
// const [a, ...values] = [1, 2, 3];
// console.log(a);
// console.log(values);

// ===================================
// destructuring object

// const mhs = {
//   nama: "Esto",
//   umur: 20,
// };

// const { nama, umur } = mhs;
// console.log(nama);

// assignment tanpa deklarasi object
// ({ nama, umur } = { nama: "Esto", umur: 20 });
// console.log(nama);

// assign ke variabel baru
// const mhs = {
//   nama: "Esto",
//   umur: 20,
// };

// const { nama: n, umur: u } = mhs;
// console.log(u);

// memberikan default value
// const mhs = {
//   nama: "Esto",
//   umur: 20,
//   email: "esto@gmail.com",
// };

// const { nama, umur, email = "email@default.com" } = mhs;
// console.log(email);

// memberi nilai default + assign ke variabel baru
// const mhs = {
//   nama: "Esto",
//   umur: 20,
//   email: "esto@gmail.com",
// };

// const { nama: n, umur: u, email: e = "email@default.com" } = mhs;
// console.log(e);

// Rest parameter
// const mhs = {
//   nama: "Esto",
//   umur: 20,
//   email: "esto@gmail.com",
// };

// const { nama, ...value } = mhs;
// console.log(value);

// mengambil field pada object, setelah dikirim sebagai parameter untuk function
const mhs = {
  id: 123,
  nama: "Esto TN",
  umur: 20,
  email: "esto@gmail.com",
};

function getIdMhs({ id, email }) {
  return email;
}

console.log(getIdMhs(mhs));
