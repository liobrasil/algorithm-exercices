//sudokuFunc solves a sudoku called const sudoku (from sudoku.txt) by solvinglines equal to 9 horizontally and vertically

//using SYNC MODE to import a txt file in an array
const fs = require("fs");
const sudokuall = fs.readFileSync("./sudoku.txt", "utf-8");
const sudoku = sudokuall.split("\n");

const getCol = (sudoku, col) => {
  let column = [];
  for (let i = 0; i < sudoku.length; i++) {
    column.push(sudoku[i][col]);
  }
  return column.join("");
};

const sudokuFunc = (sudoku) => {
  const sudoku2test = sudoku;

  for (let i = 0; i < sudoku2test.length; i++) {
    //On complète le sudoku pour les lignes
    const reg = /_/g;
    let nbr_ = sudoku2test[i].match(reg);
    if (nbr_ && nbr_.length === 1) {
      const reg2 = /_/g;
      let numLine = sudoku2test[i]
        .replace(reg2, "")
        .replace("|", "")
        .replace("|", "")
        .split("");
      let total = numLine.reduce((acc, curVal) => Number(acc) + Number(curVal));
      sudoku2test[i] = sudoku2test[i].replace("_", 45 - total);
    }
  }

  for (let i = 0; i < sudoku2test[i].length; i++) {
    //On complète le sudoku pour les colonnes
    const reg = /_/g;
    let colonne = getCol(sudoku2test, i);
    let nbr_ = colonne.match(reg);
    if (nbr_ && nbr_.length === 1) {
      const ind = colonne.indexOf("_");
      const reg2 = /_/g;
      let numLine = colonne
        .replace(reg2, "")
        .replace("-", "")
        .replace("-", "")
        .split("");
      let total = numLine.reduce((acc, curVal) => Number(acc) + Number(curVal));
      sudoku2test[ind] = sudoku2test[ind].replace("_", 45 - total);
    }
  }

  return sudoku2test;
};

console.log(sudokuFunc(sudoku));
