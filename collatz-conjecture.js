// pass any positive integer as argument
// if n is even, divide n by 2 (n / 2)
// if n is odd, multiply n by 3 and add 1 (3n + 1)
// repeat the process until you reach 1
// return the number of steps required to reach 1

/* 
//call function according to conditional
export const steps = (n) => {
  // if n < 1, throw error
  if (n < 1) throw new Error("Only positive numbers are allowed");
  // assign stepCount to 0
  let stepCount = 0;
  // if n is 1, return stepCount
  if (n === 1) {
    return stepCount;
  } else if (n % 2 === 0) {
    stepCount += steps(n / 2); // if n is even, divide by two; add to stepCount
  } else {
    stepCount += steps(3 * n + 1); // if n is odd, multiply by 3, add 1; add to stepCount
  }
  return ++stepCount; // return incremented stepCount
};
*/

/* while loop */
export const steps = (n) => {
  if (n < 1) throw new Error("Only positive numbers are allowed");
  let stepCount = 0;
  while (n > 1) {
    stepCount++;
    if (n % 2 === 0) {
      n / 2;
    } else {
      n * 3 + 1;
    }
  }
  return stepCount;
};
