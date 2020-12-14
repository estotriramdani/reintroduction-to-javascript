//  konsep this pada arrow function

// Constructor function
// const Mahasiswa = function () {
//   this.nama = 'Esto';
//   this.umur = 20;
//   this.sayHello = function () {
//     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`)
//   }
// }

// const esto = new Mahasiswa();


// Arrow function
// const Mahasiswa = function () {
//   this.nama = 'Esto';
//   this.umur = 20;
//   this.sayHello = () => {
//     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`)
//   }
// }

// const esto = new Mahasiswa();

// ====

// Object literal
// const mhs1 = {
//   nama: 'Esto';
//   umur: 20,
//   sayHello: function () {
//     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`)
//   }
// }



// const Mahasiswa = function () {
//   this.nama = 'Esto';
//   this.umur = 20;
//   this.sayHello = function () {
//     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`)
//   }

//   setInterval(() => {
//     console.log(this);
//   }, 500);
// }

// const esto = new Mahasiswa();






const box = document.querySelector('.box');

box.addEventListener('click', function () {
  let satu = 'size';
  let dua = 'caption';

  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }

  this.classList.toggle(satu);
  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
})