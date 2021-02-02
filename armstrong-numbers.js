// An Armstrong number is a number that is the sum of its own digits each raised to the power of the number of digits.

// return true if argument is an Armstrong number

export const isArmstrongNumber = (num) => {
  if (typeof num !== "number" || num < 0)
    throw new Error("Only positive numbers are allowed");

  const numArr = num.toString().split(""); // converts num to an array of digits

  const reducer = (total, currentValue) => {
    currentValue = parseInt(currentValue); // converts currentValue to an integer
    return total + Math.pow(currentValue, numArr.length); // returns the base to the exponent power
  };

  return num === numArr.reduce(reducer, 0); // executes reducer function on each element of the array resulting in single output value
};
