/* if/else */

// export const twoFer = (name) => {
//   if (!name) {
//     return 'One for you, one for me.'
//   } else {
//     return `One for ${name}, one for me.`
//   }
// };

/* ternary */

// export const twoFer = (name) => !name ? 'One for you, one for me.' : `One for ${name}, one for me.`

/* default value for parameter */

export const twoFer = (name = "you") => `One for ${name}, one for me.`;
