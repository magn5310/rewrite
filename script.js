const age = 43;
const email = "jofh@kea.dk";

// if (age % 2 === 0) {
//   isEven = true;
// } else {
//   isEven = false;
// }

// if (email === "jofh@kea.dk") {
//   if (age > 40) {
//     role = "admin";
//   }
// }

//can be done in 1 line, if you merge the two if's

// let isEven = age % 2 === 0 ? true : false;
// let role = email === "jofh@kea.dk" && age > 40 ? "admin" : "visitor";
let isEven = age % 2 === 0 ? true : false,
  role = email === "jofh@kea.dk" && age > 40 ? "admin" : "visitor";

console.log(isEven);
console.log(role);

const setTitle = (title) => {
  document.title = title;
};

const even = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const getRandBetween1and10 = () => {
  console.log(Math.floor(Math.random() * 10) + 1);
};

getRandBetween1and10();
setTitle("Hejsa");
console.log(even(43));
