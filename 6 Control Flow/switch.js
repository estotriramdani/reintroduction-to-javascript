var item = prompt('Masukkan nama makan atau minuman: \n (cth: nasi, daging, susu, hamburger, softdrink)');

switch (item) {
  case 'nasi':
  case 'daging':
  case 'susu':
    alert('makanan/minum sehat');
    break;
  case 'hamburger':
  case 'softdrink':
    alert('makanan/minuman tidak sehat');
    break;
  default:
    alert('makanan/minum tidak ada')
    break;
}