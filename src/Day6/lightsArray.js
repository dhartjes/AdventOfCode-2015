class LightsArray {
  grid;
  height;
  width;
  constructor(height, width) {
    this.height = height;
    this.width = width;
    this.grid = [height];
    this.scanArray({ x: 0, y: 0 }, { x: height - 1, y: width - 1 }, (x, y) => {
      if (y === 0) {
        this.grid[x] = [width];
      }
      this.grid[x][y] = 0;
    });
  }

  get totalLight() {
    return this.countLit();
  }

  countLit() {
    let sum = 0;
    this.scanArray(
      { x: 0, y: 0 },
      { x: this.height - 1, y: this.width - 1 },
      (x, y) => (sum += this.grid[x][y])
    );
    return sum;
  }

  scanArray(startingPoint, endingPoint, operation) {
    for (let x = startingPoint.x; x <= endingPoint.x; x++) {
      for (let y = startingPoint.y; y <= endingPoint.y; y++) {
        operation(x, y);
      }
    }
  }

  turnOn = (startingPoint, endingPoint) =>
    this.scanArray(startingPoint, endingPoint, (x, y) => (this.grid[x][y] = 1));

  increase = (startingPoint, endingPoint, amount = 1) =>
    this.scanArray(
      startingPoint,
      endingPoint,
      (x, y) => (this.grid[x][y] += amount)
    );

  decrease = (startingPoint, endingPoint) =>
    this.scanArray(startingPoint, endingPoint, (x, y) => {
      if (this.grid[x][y] > 0) this.grid[x][y] -= 1;
    });

  turnOff = (startingPoint, endingPoint) =>
    this.scanArray(startingPoint, endingPoint, (x, y) => (this.grid[x][y] = 0));

  toggle = (startingPoint, endingPoint) =>
    this.scanArray(
      startingPoint,
      endingPoint,
      (x, y) => (this.grid[x][y] = this.grid[x][y] === 0 ? 1 : 0)
    );

  runLightsShowOld = instructions =>
    instructions.forEach(instruction =>
      ({
        "turn on": () =>
          this.turnOn(instruction.startingPoint, instruction.endingPoint),
        "turn off": () =>
          this.turnOff(instruction.startingPoint, instruction.endingPoint),
        toggle: () =>
          this.toggle(instruction.startingPoint, instruction.endingPoint)
      }[instruction.command]())
    );

  runLightsShow = instructions =>
    instructions.forEach(instruction =>
      ({
        "turn on": () =>
          this.increase(instruction.startingPoint, instruction.endingPoint),
        "turn off": () =>
          this.decrease(instruction.startingPoint, instruction.endingPoint),
        toggle: () =>
          this.increase(instruction.startingPoint, instruction.endingPoint, 2)
      }[instruction.command]())
    );
}

export default LightsArray;
