let c2 = [
  [9, 3, 0, 8, 7, 0],
  [0, 8, 1, 2, 3, 5],
  [9, 7, 3, 2, 1, 7],
  [0, 9, 1, 2, 3, 0],
  [8, 8, 3, 7, 0],
];
let c1 = [
  [1, 2, 3],
  [3, 2, 1],
  [1, 2, 3],
];

let posx = 0;
let posy = 0;

const findLine = (l, c1, c2) => {
  let l2find = c1[l];
  let lenl2find = c1[l].length;
  let lencc2 = c2[l].length;
  let lenlc2 = c2.length;
  let lenlc1 = c1.length;

  for (let i = 0; i < lenlc2 - lenlc1 + 1; i++) {
    let l2search = c2[i];
    for (let j = 0; j < lencc2 - lenl2find + 1; j++) {
      if (l2search.slice(j, j + 3).toString() === l2find.toString()) {
        if (l == 0) {
          posx = j;
          posy = -i;
        }
        return [true, posx, posy];
      }
    }
  }
  return false;
};

const rectangle = (c1, c2) => {
  let nbrlc1 = c1[0].length;
  let nbrlc2 = c2[0].length;
  let nbrcc1 = c1.length;
  let nbrcc2 = c2.length;

  let response;

  for (let i = 0; i < nbrlc1; i++) {
    if (!findLine(i, c1, c2)[0]) {
      return "Le tableau n'existe pas !";
    } else {
      response = true;
    }
  }

  if (response) {
    return [posx, posy];
  }
};

console.log(rectangle(c1, c2));
