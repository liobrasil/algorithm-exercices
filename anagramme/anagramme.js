// SYNC MODE not working
const fs = require("fs");
const dicoall = fs.readFileSync("./lexique.txt", "utf-8");
const dico = dicoall.split("\n");

const motsall = fs.readFileSync("./mots.txt", "utf-8");
const mots = motsall.split("\n");

// // ASYNC MODE
// const fs = require("fs");
// fs.readFile("./lexique.txt", (text) => {
//   textByLine = text.split("\n");
// });

const anagramme = (mots, dico) => {
  let anagramme = [];
  for (let j = 0; j < mots.length; j++) {
    let lettres = mots[j].toLowerCase().split("");
    for (let i = 0; i < dico.length; i++) {
      let def = dico[i].toLowerCase();
      if (mots[j].length === def.length) {
        let anaDef = true;
        let anaLettres = true;
        for (let k = 0; k < def.length; k++) {
          if (mots[j].toLowerCase().indexOf(def[k]) === -1) {
            anaDef = false;
          }
        }
        for (let k = 0; k < lettres.length; k++) {
          if (def.indexOf(lettres[k]) === -1) {
            anaLettres = false;
          }
        }
        if (anaDef && anaLettres) {
          console.log(`anagrame de ${lettres} est ${def}`);
          anagramme.push(def);
        }
      }
    }
  }
  return anagramme;
};

console.log(anagramme(mots, dico));
