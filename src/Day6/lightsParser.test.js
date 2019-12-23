import sut from "./lightsParser";
import Point from "../Model/Point";

describe("lightsParser takes input and converts instructions to perform on lights array", () => {
  it("should read turn on as turnOn function", () => {
    expect(sut("turn on 0,0 through 999,999")).toEqual([
      {
        command: "turn on",
        startingPoint: new Point(0, 0),
        endingPoint: new Point(999, 999)
      }
    ]);

    expect(sut("toggle 0,0 through 999,0")).toEqual([
      {
        command: "toggle",
        startingPoint: new Point(0, 0),
        endingPoint: new Point(999, 0)
      }
    ]);

    expect(sut("turn off 499,499 through 500,500")).toEqual([
      {
        command: "turn off",
        startingPoint: new Point(499, 499),
        endingPoint: new Point(500, 500)
      }
    ]);
  });
});
