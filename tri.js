const tri = (array) => {
  let len = array.length;
  let newArray = [];
  let max;
  let indexMax;
  let maxTemp;

  for (let j = 0; j < len; j++) {
    max = array[0];
    for (let i = 0; i < array.length; i++) {
      if (max < array[i]) {
        localMax = array[i];
        if (localMax > max) {
          max = localMax;
          indexMax = i;
        }
      } else if (max === array[i] && i === 0) {
        indexMax = i;
      }
    }
    newArray.unshift(max);
    array.splice(indexMax, 1);
  }

  return newArray;
};

array = [4, 5, 1, 3, 100, 2, 10];
console.log(tri(array));
