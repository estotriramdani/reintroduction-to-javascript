// 1. HTML Fragments

// const mhs = {
//   nama: "Esto",
//   umur: 21,
//   nrp: "J3D18129",
//   email: "esto_nurlustiawan@apps.ipb.ac.id",
// };

// const el = `<div class="mhs">
// <h2>${mhs.nama}</h2>
// <span class="nrp">${mhs.nrp}</span>
// </div>`;

// 2. Looping

// const mhs = [
//   {
//     nama: "Esto TN",
//     email: "esto@gmail.com",
//   },
//   {
//     nama: "Doddy",
//     email: "dody@gmail.com",
//   },
//   {
//     nama: "Erik",
//     email: "erik@gmail.com",
//   },
// ];

// const el = `<div class="mhs">
//   ${mhs
//     .map(
//       (m) => `<ul>
//   <li>${m.nama}</li>
//   <li>${m.email}</li>
//   </ul>`
//     )
//     .join("")}
// </div>
// `;

// 3. Conditionals
// ternary

// const lagu = {
//   judul: "Kau Adalah",
//   penyanyi: "Isyana Sarasvati",
//   feat: "Rayi Putra",
// };

// const el = `<div class="lagu">
//   <ul>
//     <li>${lagu.penyanyi}</li>
//     <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ""}</li>
//   </ul>
// </div>`;

// 4. Nested
// HTML Fragments bersarang

const mhs = {
  nama: "Esto TN",
  semester: 5,
  mataKuliah: [
    "Rekayasa Web",
    "Analisis dan Perancangan Sistem Informasi",
    "Pemrograman Sistem Interaktif",
    "Perancangan Sistem Berorientasi Obyek",
  ],
};

function cetakMataKuliah(mataKuliah) {
  return `
    <ol>
      ${mataKuliah.map((mk) => `<li>${mk}</li>`).join("")}
    </ol>
  `;
}

const el = `<div class="mhs">
  <h2>${mhs.nama}</h2>
  <span class="semester">Semester ${mhs.semester}</span>
  <h4>Mata Kuliah:</h4>
  ${cetakMataKuliah(mhs.mataKuliah)}
</div>`;

document.body.innerHTML = el;
