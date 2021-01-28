// set constant for minutes in hour and minutes in day
const MINUTES_IN_HOUR = 60;
const MINUTES_IN_DAY = 24 * MINUTES_IN_HOUR;

// class declaration
export class Clock {
  // constructor method creates and initializes Clock object
  constructor(hours, minutes = 0) {
    // minutes equals the remainder of total minutes
    this.minutes = (hours * MINUTES_IN_HOUR + minutes) % MINUTES_IN_DAY;
    // if minutes are less than 0, minutes in day are added to minutes
    if (this.minutes < 0) {
      this.minutes += MINUTES_IN_DAY;
    }
  }
  // methods
  toString() {
    const hours = Math.floor(this.minutes / MINUTES_IN_HOUR) % MINUTES_IN_DAY;
    const minutes = this.minutes % MINUTES_IN_HOUR;
    return `${hours < 10 ? "0" : ""}${hours}:${
      minutes < 10 ? "0" : ""
    }${minutes}`;
  }

  plus(minutes) {
    return new Clock(0, this.minutes + minutes);
  }

  minus(minutes) {
    return this.plus(-minutes);
  }

  equals(clock) {
    return this.minutes === clock.minutes;
  }
}
