//function that prints factorial without exponent
const math = require("mathjs");
const factorielSansExp = (num) => {
  if (num === 1) {
    return 1;
  } else {
    return factorielSansExp(num - 1) * num;
  }
};

console.log(math.format(factorielSansExp(42), { notation: "fixed" }));
