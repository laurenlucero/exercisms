// For a shape to be a triangle at all, all sides have to be of length > 0, and the sum of the lengths of any two sides must be greater than or equal to the length of the third side

export class Triangle {
  constructor(...sides) {
    this.a = sides[0];
    this.b = sides[1];
    this.c = sides[2];
    this.inequality =
      this.a + this.b < this.c ||
      this.b + this.c < this.a ||
      this.c + this.a < this.b;
  }

  // equilateral triangle has all three sides the same length
  get isEquilateral() {
    const equilateral =
      this.a === this.b && this.b === this.c && this.a === this.c;
    if ((equilateral && this.a === 0) || this.b === 0 || this.c === 0)
      return false;
    return equilateral;
  }

  // isosceles triangle has at least two sides the same length
  get isIsosceles() {
    const isosceles =
      this.a === this.b || this.b === this.c || this.a === this.c;
    if (this.inequality) return false;
    return isosceles;
  }

  // scalene triangle has all sides of different lengths
  get isScalene() {
    const scalene = this.a !== this.b && this.b !== this.c && this.a !== this.c;
    if (this.inequality) return false;
    return scalene;
  }

  // where the sum of the lengths of two sides equals that of the third is known as a degenerate triangle - it has zero area and looks like a single line
  get isDegenerate() {
    return (
      this.a + this.b === this.c ||
      this.b + this.c === this.a ||
      this.a + this.c === this.b
    );
  }
}
