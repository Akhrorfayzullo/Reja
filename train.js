console.log("Jack Ma Maslahatlari");

const list = [
  "Be a good student", //20
  "choose a right boss and make a lot of mistakes", //20-30
  "start to work for yourself", //30-40
  "do what you are best at", //40-50
  "invest for young generation", //50-60
  "Just rest now", //60
];

//Callback
// function maslaxatBering(a, callback) {
//   if (typeof a != "number") callback("insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setTimeout(function () {
//       callback(null, list[5]);
//     }, 5000);
//   }
// }
// console.log("passed 11111");
// maslaxatBering(61, (err, data) => {
//   if (err) console.log("ERROR", err);
//   console.log("DATA ", data);
// });
// console.log("passed 2222");

async function maslaxatBering(a, callback) {
  if (typeof a != "number") throw new Error("insert a number");
  else if (a <= 20) return list[0];
  else if (a > 20 && a <= 30) return list[1];
  else if (a > 30 && a <= 40) return list[2];
  else if (a > 40 && a <= 50) return list[3];
  else if (a > 50 && a <= 60) return list[4];
  else {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(list[5]);
      }, 5000);
    });
    //     setTimeout(function () {
    //       return list[5];
    //     }, 5000);
  }
}
// console.log("passed 11111");

//call via then , catch
// maslaxatBering(61)
//   .then((data) => {
//     console.log("Javob: ", data);
//   })
//   .catch((err) => {
//     console.log("Error: ", err);
//   });
// console.log("passed 2222");

//async
async function run() {
  let javob = await maslaxatBering(11);
  console.log(javob);
  javob = await maslaxatBering(71);
  console.log(javob);
  javob = await maslaxatBering(31);
  console.log(javob);
  javob = await maslaxatBering(41);
  console.log(javob);
}
// run();

function maslaxatBering(a, callback) {
  if (typeof a != "number") callback("insert a number", null);
  else if (a <= 20) callback(null, list[0]);
  else if (a > 20 && a <= 30) callback(null, list[1]);
  else if (a > 30 && a <= 40) callback(null, list[2]);
  else if (a > 40 && a <= 50) callback(null, list[3]);
  else if (a > 50 && a <= 60) callback(null, list[4]);
  else {
    setInterval(function () {
      callback(null, list[5]);
    }, 1000);
  }
}

// console.log("passed 11111");
// maslaxatBering(61, (err, data) => {
//   if (err) console.log("ERROR", err);
//   console.log("DATA ", data);
// });
// console.log("passed 2222");

// A-TASK:

// Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
// MASALAN countLetter("e", "engineer") 3ni return qiladi.

// masalani yechimi:
function countLetter(letter, word) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      count++;
    }
  }
  return count;
}

console.log(countLetter("e", "engineer"));
