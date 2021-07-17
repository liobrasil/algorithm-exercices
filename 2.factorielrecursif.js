//function that returns factorial of number num with recursive method
factoriel = (num) => {
  let factor = num;

  if (factor > 1) {
    return factoriel(factor - 1) * factor;
  } else {
    return factor;
  }
};

let num = 4;
console.log(factoriel(num));
