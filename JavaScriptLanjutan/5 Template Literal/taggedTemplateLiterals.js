// Tagged Templates
// const nama = "Esto TN";
// const umur = 21;

// function coba(strings, ...values) {
//   // let result = "";
//   // strings.forEach((str, i) => {
//   //   result += `${str}${values[i] || ""}`;
//   // });
//   // return result;

//   return strings.reduce(
//     (result, str, i) => `${result}${str}${values[i] || ""}`,
//     ""
//   );
// }

// const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun`;
// console.log(str);

// higlight

const nama = "Esto TN";
const umur = 21;
const email = "esto@gmail.com";

function highlight(strings, ...values) {
  return strings.reduce(
    (result, str, i) =>
      `${result}${str}<span class="hl">${values[i] || ""}</span>`,
    ""
  );
}

const str = highlight`Halo, nama saya ${nama}, saya ${umur} tahun. Email saya ${email}`;
document.body.innerHTML = str;
