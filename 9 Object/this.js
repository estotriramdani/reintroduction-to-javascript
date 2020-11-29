// this
// console.log(this);

// cara  1 - function declaration
// function halo() {
//   console.log(this);
//   console.log('halo');
// }

// this.halo();
// this mengembalikan object global

// cara 2 - object literal

// var obj = { nama: 'Esto', umur: 20 };
// obj.halo = function () {
//   console.log(this);
//   console.log('hallo');
// }

// obj.halo();

// cara 3 - constructor
function Halo() {
  console.log(this);
  console.log('halo');
}

var obj2 = new Halo();
var obj3 = new Halo();
// this mengembalikan object yang baru dibuat