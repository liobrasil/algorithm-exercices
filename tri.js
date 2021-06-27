tri = (array) => {
  let len = array.length;
  let newArray = [];
  let max = array[0];
  let maxTemp;

  for (let i = 0; i < len - 1; i++) {
    if (array[i] < array[i + 1]) {
      //je parcours le tableau en comparant les nombres deux à deux
      maxTemp = array[i + 1];
      if (maxTemp > max) {
        //si la valeur max temporaire est supérieure à mon max global en cours de parcours on affecte au max global la nouvelle valeur du max temporaire
        max = maxTemp;
      }
    }
  }

  return newArray;
};

array = [4, 5, 1, 3, 2, 5, 1, 10, 100, 2];
console.log(tri(array));
