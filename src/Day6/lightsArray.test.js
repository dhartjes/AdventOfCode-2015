import LightsArray from "./LightsArray";

describe("lightsArray maintains state of the lights between instructions", () => {
  let lightsArray;

  beforeEach(() => {
    lightsArray = new LightsArray(3, 3);
  });

  it("should instantiate lights array of specified size", () => {
    expect(lightsArray.grid[2][2]).not.toBeUndefined();
  });
  it("should return total number of lights lit", () => {
    expect(lightsArray.totalLit).toEqual(0);
  });

  it("should be higher when turning lights on", () => {
    expect(lightsArray.totalLit).toEqual(0);
    lightsArray.turnOn({ x: 0, y: 0 }, { x: 1, y: 0 });
    expect(lightsArray.totalLit).toEqual(2);

    lightsArray.turnOn({ x: 0, y: 2 }, { x: 0, y: 2 });
    expect(lightsArray.totalLit).toEqual(3);

    lightsArray.turnOn({ x: 0, y: 1 }, { x: 2, y: 1 });
    expect(lightsArray.totalLit).toEqual(6);
  });

  it("should be lower when turning lights off", () => {
    lightsArray.turnOn({ x: 0, y: 0 }, { x: 2, y: 2 });
    expect(lightsArray.totalLit).toEqual(9);
    lightsArray.turnOff({ x: 0, y: 0 }, { x: 1, y: 0 });
    expect(lightsArray.totalLit).toEqual(7);

    lightsArray.turnOff({ x: 0, y: 2 }, { x: 0, y: 2 });
    expect(lightsArray.totalLit).toEqual(6);

    lightsArray.turnOff({ x: 2, y: 0 }, { x: 2, y: 0 });
    expect(lightsArray.totalLit).toEqual(5);

    lightsArray.turnOff({ x: 0, y: 1 }, { x: 2, y: 1 });
    expect(lightsArray.totalLit).toEqual(2);
  });

  it("should invert when toggling lights", () => {
    lightsArray.turnOn({ x: 2, y: 0 }, { x: 2, y: 2 });
    expect(lightsArray.totalLit).toEqual(3);
    lightsArray.toggle({ x: 0, y: 0 }, { x: 2, y: 2 });
    expect(lightsArray.totalLit).toEqual(6);
  });

  it("should stay on when turning on an already on light", () => {
    lightsArray.turnOn({ x: 0, y: 0 }, { x: 2, y: 0 });
    expect(lightsArray.totalLit).toEqual(3);

    lightsArray.turnOn({ x: 0, y: 0 }, { x: 2, y: 1 });
    expect(lightsArray.totalLit).toEqual(6);
  });
  it("should stay off when turning off an already off light", () => {
    lightsArray.turnOn({ x: 0, y: 0 }, { x: 2, y: 1 });
    expect(lightsArray.totalLit).toEqual(6);

    lightsArray.turnOff({ x: 0, y: 1 }, { x: 2, y: 2 });
    expect(lightsArray.totalLit).toEqual(3);
  });
});
