export class WscpVariable {
  private name;
  private maxVal;
  private extreme;

  constructor(name, maxVal, extreme) {
    this.name = name;
    this.maxVal = maxVal;
    this.extreme = extreme;
  }
}
