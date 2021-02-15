// isPangram checks a string to see if it contains every letter of the alphabet, returns boolean

const ALPHABET = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

export const isPangram = (string) => {
  // if not string, return false
  if (!string) return false;
  // make string lower case
  const lowerCaseString = string.toLowerCase();
  // check if the string includes every letter in the alphabet array
  const result = ALPHABET.every((letter) => {
    return lowerCaseString.includes(letter);
  });
  return result;
};
