import sut from "./lightsParser";

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

  it("should read turn off as turnOff function", () => {});

  it("should read toggle as toggle function", () => {});

  it("should read x1,y1 through x2,y2 as referring to specific lights in the array", () => {});
});
