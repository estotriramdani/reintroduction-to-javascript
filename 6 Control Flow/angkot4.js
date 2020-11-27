var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

for (noAngkot = noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= 6) {
    console.log('Angkot ' + noAngkot + ' beroperasi dengan baik');
  } else if (noAngkot == 8) {
    console.log('Angkot ' + noAngkot + ' sedang lembur')
  } else {
    console.log('Angkot ' + noAngkot + ' sedang tidak beroperasi');
  }
}