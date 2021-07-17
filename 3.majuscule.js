//function that returns a string with the letters alternatively in upper and lowercase
majuscule = (str) => {
  let len = str.length;
  let newStr = "";
  for (let i = 0; i < len; i++) {
    if (i % 2 === 0) {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i].toLowerCase();
    }
  }
  return newStr;
};

let str = "Salut je pense que je vais tout déchirer@!";
console.log(majuscule(str));
