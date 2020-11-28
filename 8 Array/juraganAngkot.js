var penumpang = ['Esto', 'Galih', undefined, 'Bradd'];

function tambahPenumpang(namaPenumpang, penumpang) {
  if (penumpang.length == 0) {
    penumpang.push(namaPenumpang);
    return penumpang;
  } else {
    // telusuri kursi dari awal
    for (var i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == undefined) {
        penumpang[i] = namaPenumpang;
        return penumpang;
      }
      else if (penumpang[i] == namaPenumpang) {
        console.log('Penumpang dengan nama ' + namaPenumpang + ' sudah ada di dalam angkot')
      }
      else if (i == penumpang.length - 1) {
        penumpang.push(namaPenumpang);
        return penumpang;
      }
    }
  }
}

var hapusPenumpang = function (namaPenumpang, penumpang) {
  if (penumpang.length == 0) {
    console.log('Angkot kosong');
    return penumpang;
  } else {
    for (i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == namaPenumpang) {
        penumpang[i] = undefined;
        return penumpang;
      } else if (i == penumpang.length - 1) {
        console.log('Nama penumpang ' + namaPenumpang + ' tidak ada');
        return penumpang;
      }
    }
  }
}


console.log(penumpang.join(' - '));