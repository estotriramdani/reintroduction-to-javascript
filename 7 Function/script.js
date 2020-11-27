function jumlahVolumeDuaKubus(a, b) {
  var total;
  volumeA = a * a * a;
  volumeB = b * b * b;
  total = volumeA + volumeB;
  return total;
}

console.log(jumlahVolumeDuaKubus(2, 4));