// function init() {
//   // let nama = 'Esto';
//   return function (nama) {
//     console.log(nama);
//   }
// }

// let panggilNama = init();
// panggilNama('Well');
// panggilNama('Shoffa');




// function ucapkanSalam(waktu) {
//   return function (nama) {
//     console.log(`Halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan!`);
//   }
// }

// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('malam');

// selamatPagi('Esto');
// selamatMalam('Shoffa');


let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  }
})();

console.log(add());
console.log(add());
console.log(add());
