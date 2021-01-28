// given an age in seconds, calculate how old someone would be on:
// Mercury: orbital period 0.2408467 Earth years
// Venus: orbital period 0.61519726 Earth years
// Earth: orbital period 1.0 Earth years, 365.25 Earth days, or 31557600 seconds
// Mars: orbital period 1.8808158 Earth years
// Jupiter: orbital period 11.862615 Earth years
// Saturn: orbital period 29.447498 Earth years
// Uranus: orbital period 84.016846 Earth years
// Neptune: orbital period 164.79132 Earth years

// pass in planet name and seconds as arguments
export const age = (planet, seconds) => {
  // object holds orbital period value of each planet in Earth years
  const spaceTime = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
  };
  // divide seconds argument by Earth orbit seconds multiplied by planet spaceTime value
  // toFixed() method formats a number using fixed-point notation
  return (seconds / (31557600 * spaceTime[planet])).toFixed(2) * 1;
};
