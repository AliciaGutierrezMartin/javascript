export const games = ["Zelda", "Mario Bros", "Metroid", "Chrono"];

/**
 * Removes the first element from an array and returns it.
 * If the array is empty, undefined is returned and the array is not modified.
 */
export const deleteFirtPosition = () => {
  let borrado = games[0];
  games.shift();
  return borrado;
};

/**
 * Removes the last element from an array and returns it.
 * If the array is empty, undefined is returned and the array is not modified.
 */
export const deleteLastPosition = () => {
  let borradoUltimo = games[games.length-1];
  games.pop();
  return borradoUltimo;
};

/**
 * Inserts new element at the start of an array, and returns the new length of the array.
 * @param item Element to insert at the start of the array.
 */
export const addFirstPosition = (item) => {
  games.unshift("Fornite");
  return games.length;
};

/**
 * Appends new element to the end of an array, and returns the new length of the array.
 * @param item New element to add to the array.
 */
export const addLastPosition = (item) => {
  games.push("Pokemon");
  return games.length;
};

/******************************************************/
export const got = [
  "Lannister",
  "Targaryen",
  "Stark",
  "Baratheon",
  "Greyjoy",
  "Arryn",
  "Martell",
];

/**
 * Removes Baratheon and Greyjoy houses
 * @returns array with items removes
 */
export const removeBaratheonAndGreyjoy = () => {
  let casasBorradas = [];
  let indiceBar = got.indexOf("Baratheon");
  if (indiceBar > -1) {
    got.splice(indiceBar,1);
    casasBorradas.push("Baratheon")
  } 

  let indiceGrey = got.indexOf("Greyjoy");
  if (indiceGrey > -1) {
    got.splice(indiceGrey,1);
    casasBorradas.push("Greyjoy")
  }
  return casasBorradas;
};

/**
 * Removes Arryn house
 * @returns array with items removes
 */
export const removeArryn = () => {
  let casaBorrada = [];
  let indiceAr = got.indexOf("Arryn");
  if (indiceAr > -1) {
    got.splice(indiceAr, 1);
    casaBorrada.push("Arryn")
  }

  return casaBorrada;
};

/******************************************************/
export const narutoCharacters = [
  "Naruto",
  "Sasuke",
  "Sakura",
  "Hinata",
  "Kakashi",
  "Jiraiya",
  "Itachi",
  "Gaara",
];

/**
 * Gets the index of Naruto
 * @returns the index found.
 */
export const getNaruto = () => {
  let naruto = narutoCharacters.indexOf("Naruto");
  return naruto;
};

/**
 * Gets the index of Gaara
 * @returns the index found.
 */
export const getGaara = () => {
  let gara = narutoCharacters.indexOf("Gaara");
  return gara;
};


/**
 * Gets the index of Rock Lee
 * @returns the index found.
 */
export const getRockLee = () => {
  let lee = narutoCharacters.indexOf("Rock Lee");
  return lee;
};


/**
 * Reverses the elements in Naruto Characters array
 * @returns the reversed given array
 */
export const reverseNarutoCharacters = () => {
  let reves = narutoCharacters.reverse();
  return reves;
};
