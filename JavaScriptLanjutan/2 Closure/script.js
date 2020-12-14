// 2.1 execution context, hoisting, scope

// console.log(nama);
// var nama = 'Esto';

// creation phase pada Global Context
// nama var = undefined
// nama function = fn()
// hoisting
// window = global object
// this = window

// execution phase


// var nama = 'Esto';
// var umur = 20;

// console.log(sayHello());

// function sayHello() {
//   return (`Halo, nama saya ${nama}, saya ${umur} tahun`);
// }

// ==================================================

// function membuat Local Execution Context
// yang di dalamnya terdapat ceration dan execution phase
// window
// arguments
// hoisting

var nama = 'Esto Triramdani N';
var username = 'estotriramdani';

function cetakURL() {
  console.log(arguments[0]);
  var instagramURL = 'http://instagram.com/';
  return instagramURL + username;
}

console.log(cetakURL('doddy'));
















// function a() {
//   console.log('ini a');
//   function b() {
//     console.log('ini b');
//     function c() {
//       console.log('ini c');
//     }
//     c();
//   }
//   b();
// }
// a();