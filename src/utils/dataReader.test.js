import { parseBoxDimensions, parseElfDirections } from "./dataReader";

describe("DataReader reads the input prompts and converts them using specific sets of conversion logic", () => {
  it("should parse list of box dimensions string into correct number of boxes", () => {
    expect(parseBoxDimensions("1x1x1").length).toBe(1);
    expect(
      parseBoxDimensions(
        `1x1x1
			2x2x2`
      ).length
    ).toBe(2);
    expect(
      parseBoxDimensions(
        `1x1x1
			2x2x2
			3x3x3`
      ).length
    ).toBe(3);
  });

  it("should parse box dimensions into object with proper values", () => {
    expect(parseBoxDimensions("2x2x2")).toStrictEqual([{ d: 2, h: 2, w: 2 }]);
  });

  it("should parse elf directions into x,y coords", () => {
    expect(parseElfDirections("^").length).toBe(2);
    expect(parseElfDirections("^>").length).toBe(3);
    expect(parseElfDirections("^")[1]).toStrictEqual({ x: 0, y: 1 });
    expect(parseElfDirections("^^")[2]).toStrictEqual({ x: 0, y: 2 });
    expect(parseElfDirections(">")[1]).toStrictEqual({ x: 1, y: 0 });
    expect(parseElfDirections(">>")[2]).toStrictEqual({ x: 2, y: 0 });
    expect(parseElfDirections("v")[1]).toStrictEqual({ x: 0, y: -1 });
    expect(parseElfDirections("vv")[2]).toStrictEqual({ x: 0, y: -2 });
    expect(parseElfDirections("<")[1]).toStrictEqual({ x: -1, y: 0 });
    expect(parseElfDirections("<<")[2]).toStrictEqual({ x: -2, y: 0 });
  });
});
