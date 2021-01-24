//

export const decodedValue = (colors) => {
  return +colors // unary plus converts to a number from a string
    .slice(0, 2) // slice extracts a section of a string and returns it as a new string, starting at index 0, ending before index 2
    .map((color) => COLORS.indexOf(color)) // creates a new array with the first index at which a given element can be found
    .join(""); // creates and returns a new string by concatenating all of the elements in an array
};

export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];
