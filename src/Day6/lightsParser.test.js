import sut, { runLightShow } from "./lightsParser";
import LightsArray from "./lightsArray";

describe("lightsParser takes input and converts instructions to perform on lights array", () => {
  it("should read turn on as turnOn function", () => {
    expect(sut("turn on 0,0 through 999,999")).toEqual([
      {
        command: "turn on",
        startingPoint: { x: 0, y: 0 },
        endingPoint: { x: 999, y: 999 }
      }
    ]);

    expect(sut("toggle 0,0 through 999,0")).toEqual([
      {
        command: "toggle",
        startingPoint: { x: 0, y: 0 },
        endingPoint: { x: 999, y: 0 }
      }
    ]);

    expect(sut("turn off 499,499 through 500,500")).toEqual([
      {
        command: "turn off",
        startingPoint: { x: 499, y: 499 },
        endingPoint: { x: 500, y: 500 }
      }
    ]);
  });

  it("should apply instructions to a LightsArray", () => {
    let lightsArray = new LightsArray(3, 3);
    let instructions = sut(
      // "turn on 0,0 through 1,2\nturn off 0,0 through 1,1"
      "toggle 0,0 through 2,2\nturn off 2,0 through 2,2\nturn on 2,1 through 2,1"
    );
    runLightShow(lightsArray, instructions);

    expect(lightsArray.totalLit).toEqual(7);
  });
});
