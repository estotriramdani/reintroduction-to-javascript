var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

while (noAngkot <= angkotBeroperasi) {
  console.log('Angkot ' + noAngkot + ' berjalan dengan baik.')
  noAngkot++;
}

for (noAngkot = noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
  console.log('Angkot ' + noAngkot + ' sedang tidak beroperasi');
}