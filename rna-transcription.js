// Given a DNA strand, return its RNA complement (per RNA transcription).
// Its transcribed RNA strand is formed by replacing each nucleotide with its complement:
// G -> C
// C -> G
// T -> A
// A -> U

export const toRna = (dna) => {
  // object of DNA keys to RNA values
  const transcription = { G: "C", C: "G", T: "A", A: "U" };
  return dna
    .split("") // divides String into an ordered list of substrings, puts these substrings into an array, and returns the array
    .map((letter) => transcription[letter]) // creates a new array populated with the results of the corresponding transcription value
    .join(""); // creates and returns a new string by concatenating all of the elements in an array
};
