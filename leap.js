// Given a year (parameter), report if it is a leap year (boolean)

// a leap year occurs:
// on every year that is evenly divisible by 4 (add an extra day every four years)
// except every year that is evenly divisible by 100 (a new century)
// unless the year is also evenly divisible by 400

// if the year is divisible by 4 AND the year is not divisible by 100 OR divisible by 400, return true

// The logical AND (&&) operator (logical conjunction) for a set of operands is true if and only if all of its operands are true
// The logical OR (||) operator (logical disjunction) for a set of operands is true if and only if one or more of its operands is true

/* if/else */
// export const isLeap = (year) => {
//   if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
//     return true;
//   } else {
//     return false;
//   }
// };

/* ternary */
// if the year is not divisible by 100, check that the year is not divisible by 400
// if false, check that the year is not divisible by 4

// export const isLeap = year => !(year % 100) ? !(year % 400) : !(year % 4);

/* implicit return */
export const isLeap = (year) =>
  year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
