// $.ajax({
//   url: "http://www.omdbapi.com/?apikey=84e8dda0&s=avengers",
//   success: () => {}
// });

// fetch
// fetch("http://www.omdbapi.com/?apikey=84e8dda0&s=avengers")
//   .then((response) => response.json())
//   .then((response) => console.log(response));

//  =================== PROMISE ==========================
// bahas promise
// Promise adalah object yang mereprensentasikan keberhasilan/kegagalan sebuah event yang async di masa yang akan datang
// janji (terpenuhi / ingkar)
// states (fulfilled / rejected / pending)
// callback (resolve [janjinya terpenuhi]/ reject [tidak terpenuhi] / finally [waktu tunggu selesai])
// aksi (then [terpenuhi], catch [tidak terpenuhi])

// contoh 1
// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve("Janji telah ditepati");
//   } else {
//     reject("Ingkar janji");
//   }
// });

// janji1
//   .then((response) => console.log("OKE : " + response))
//   .catch((response) => console.log("NOT OK : " + response));

// contoh 2
// let ditepati = false;
// const janji2 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     setTimeout(() => {
//       resolve("Ditepati setelah beberapa waktu");
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       reject("Tidak ditepati setelah beberapa waktu");
//     }, 2000);
//   }
// });

// console.log("mulai");
// console.log(janji2.then(() => console.log(janji2)));
// janji2
//   .finally(() => console.log("selesai menunggu"))
//   .then((response) => console.log("OKE : " + response))
//   .catch((response) => console.log("NOT OK : " + response));
// console.log("selesai");

//  =================== Promise.all ==========================

const film = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        judul: "Avengers",
        sutradara: "Esto",
        pemeran: "Shoffa, Shoffi",
      },
    ]);
  }, 1000);
});

const cuaca = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        kota: "Bandung",
        temp: 26,
        kondisi: "Cerah berawan",
      },
    ]);
  }, 500);
});

// film.then((response) => console.log(response));
// cuaca.then((response) => console.log(response));

Promise.all([film, cuaca]).then((response) => {
  const [film, cuaca] = response;
  console.log(film);
  console.log(cuaca);
});
