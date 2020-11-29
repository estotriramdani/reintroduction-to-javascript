// membuat object

// Object Literal
var mhs1 = {
  nama: 'Esto TN',
  nrp: '020100',
  email: 'esto@gmail.com',
  jurusan: 'Teknik Komputer'
}

var mhs2 = {
  nama: 'Fitri',
  nrp: '023821',
  email: 'fitri@gmail.com',
  jurusan: 'Teknik Komputer'
}

// Function declaration
function buatObjectMahasiswa(nama, nrp, email, jurusan) {
  var mhs = {};
  mhs.nama = nama;
  mhs.nrp = nrp;
  mhs.email = email;
  mhs.jurusan = jurusan;

  return mhs;
}

var mhs3 = buatObjectMahasiswa('Rani', '084721', 'rani@gmail.com', 'Statistika');


// Constructor
function Mahasiswa(nama, nrp, email, jurusan) {
  this.nama = nama;
  this.nrp = nrp;
  this.email = email;
  this.jurusan = jurusan;
}

var mhs4 = new Mahasiswa('Shoffa', '02041', 'shoffa@gmail.com', 'Biologi');