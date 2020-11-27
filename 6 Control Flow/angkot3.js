var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

for (noAngkot = noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= 6) {
    console.log('Angkot ' + noAngkot + ' beroperasi dengan baik');
  } else {
    console.log('Angkot ' + noAngkot + ' sedang tidak beroperasi');
  }
}