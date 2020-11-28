// manipulasi array

// 1. Menambah isi array
// var arr = [];
// arr[0] = "Esto";
// arr[1] = "Triramdani N"
// arr[2] = "Esto"

// console.log(arr);

// 2. Menghapus isi array
// var arr = ["Esto", "TN", "Hehe"];
// arr[1] = undefined;
// console.log(arr);

// 3. Menampilkan isi array
// var arr = ["Esto", "TN", "Hehe", "Doddy", "Bayu"];

// for (var i = 0; i < arr.length; i++) {
//   console.log('Mahasiswa ke-' + i + ': ' + arr[i]);
// }

var arr = ["Esto", "TN", "Hehe", "Doddy", "Bayu", "Fitri"];

// Method pada array
// 1. Join
// console.log(arr.join(' - '));

// 2. push and pop
// arr.push('Menong');
// arr.pop();
// arr.pop();


// 3. unshift & shift
// arr.unshift('Doddy')
// arr.shift();


// 4. splice
// splice(indexAwal, maudihapusBerapa, elemenBaru1, elemenBary2)
// arr.splice(2, 2, "HAHA", "HOHO")

// 5. Slice
// slice.(awal, jumlah)
// var arr2 = arr.slice(0, 1)
// console.log(arr2.join(' - '));

// 6. foreach
var angka = [1, 6, 5, 9, 2, 9, 7, 8];
var nama = ['Esto', 'Fitri', 'Ida']

// angka.forEach(function (e) {
//   console.log(e);
// });

// nama.forEach(function (e, i) {
//   console.log('Mahasiswa ke-' + (i + 1) + ' adalah: ' + e)
// })

// var angka2 = angka.map(function (e) {
//   return e * 2;
// });

// console.log(angka2.join(' - '));

// angka.sort();
// console.log(angka.join(' - '));

// 9. filter & find
var angka2 = angka.find(function (x) {
  return x > 5;
})

console.log(angka2);
