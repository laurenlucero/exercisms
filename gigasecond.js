// 1 gigasecond = 1,000,000,000,000 seconds
const gigasecondNum = 1000000000000;

// Date objects contain a Number that represents milliseconds since 1 January 1970 UTC
// getTime() method assigns date and time to date argument in milliseconds
export const gigasecond = (date) => new Date(date.getTime() + gigasecondNum);
