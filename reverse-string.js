/* prototype methods */
// split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array
// reverse() method reverses an array in place, first element becomes last, last becomes first
// join() method creates and returns a new string by concatenating all of the elements in an array

export const reverseString = (string) => string.split("").reverse().join("");

/* for loop */
/* export const reverseString = (givenString) => {
  if (givenString) {
    let returnString = "";

    for (let i = givenString.length - 1; i >= 0; i--) {
      returnString += givenString[i];
    }

    return returnString;
  } else return "";
}; */
