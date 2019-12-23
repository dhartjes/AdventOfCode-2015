import Sut from "./LightsArray";
import lightsParser from "./lightsParser";
import Point from "../Model/Point";

describe("lightsArray maintains state of the lights between instructions", () => {
  let sut;

  beforeEach(() => {
    sut = new Sut(3, 3);
  });

  it("should instantiate lights array of specified size", () => {
    expect(sut.grid[2][2]).not.toBeUndefined();
  });
  it("should return total number of lights lit", () => {
    expect(sut.totalLight).toEqual(0);
  });

  it("should be higher when turning lights on", () => {
    expect(sut.totalLight).toEqual(0);
    sut.turnOn(new Point(0, 0), new Point(1, 0));
    expect(sut.totalLight).toEqual(2);

    sut.turnOn(new Point(0, 2), new Point(0, 2));
    expect(sut.totalLight).toEqual(3);

    sut.turnOn(new Point(0, 1), new Point(2, 1));
    expect(sut.totalLight).toEqual(6);
  });

  it("should be lower when turning lights off", () => {
    sut.turnOn(new Point(0, 0), new Point(2, 2));
    expect(sut.totalLight).toEqual(9);
    sut.turnOff(new Point(0, 0), new Point(1, 0));
    expect(sut.totalLight).toEqual(7);

    sut.turnOff(new Point(0, 2), new Point(0, 2));
    expect(sut.totalLight).toEqual(6);

    sut.turnOff(new Point(2, 0), new Point(2, 0));
    expect(sut.totalLight).toEqual(5);

    sut.turnOff(new Point(0, 1), new Point(2, 1));
    expect(sut.totalLight).toEqual(2);
  });

  it("should invert when toggling lights", () => {
    sut.turnOn(new Point(2, 0), new Point(2, 2));
    expect(sut.totalLight).toEqual(3);
    sut.toggle(new Point(0, 0), new Point(2, 2));
    expect(sut.totalLight).toEqual(6);
  });

  it("should stay on when turning on an already on light", () => {
    sut.turnOn(new Point(0, 0), new Point(2, 0));
    expect(sut.totalLight).toEqual(3);

    sut.turnOn(new Point(0, 0), new Point(2, 1));
    expect(sut.totalLight).toEqual(6);
  });
  it("should stay off when turning off an already off light", () => {
    sut.turnOn(new Point(0, 0), new Point(2, 1));
    expect(sut.totalLight).toEqual(6);

    sut.turnOff(new Point(0, 1), new Point(2, 2));
    expect(sut.totalLight).toEqual(3);
  });

  it("should apply instructions to a LightsArray", () => {
    let instructions = lightsParser(
      "toggle 0,0 through 2,2\nturn off 2,0 through 2,2\nturn on 2,1 through 2,1"
    );
    sut.runLightsShowOld(instructions);

    expect(sut.totalLight).toEqual(7);

    sut = new Sut(4, 4);
    instructions = lightsParser(
      "turn on 0,0 through 1,2\nturn off 0,0 through 1,1"
    );
    sut.runLightsShowOld(instructions);

    expect(sut.totalLight).toEqual(2);
  });

  it("should increase brightness of grid", () => {
    sut.increase(new Point(0, 0), new Point(2, 2));
    sut.increase(new Point(0, 0), new Point(0, 0), 3);
    expect(sut.totalLight).toEqual(12);
  });
});
