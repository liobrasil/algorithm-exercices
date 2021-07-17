//function that returns a stair of n steps
escalier = (step) => {
  let str = [];

  for (let i = 1; i <= step; i++) {
    for (let j = 1; j <= step; j++) {
      if (j > step - i) {
        str += "#";
      } else {
        str += " ";
      }
    }
    str += "\n";
  }
  return str;
};

let marche = 20;
console.log(escalier(marche));
