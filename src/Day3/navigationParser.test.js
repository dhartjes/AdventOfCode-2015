import navigationParser from "./navigationParser";
import Point from "../Model/Point";

describe("navigationParser takes input and parses into an array of locations reached", () => {
  it("should parse elf directions into x,y coords", () => {
    expect(navigationParser("^").length).toBe(2);
    expect(navigationParser("^>").length).toBe(3);
    expect(navigationParser("^")[1]).toStrictEqual(new Point(0, 1));
    expect(navigationParser("^^")[2]).toStrictEqual(new Point(0, 2));
    expect(navigationParser(">")[1]).toStrictEqual(new Point(1, 0));
    expect(navigationParser(">>")[2]).toStrictEqual(new Point(2, 0));
    expect(navigationParser("v")[1]).toStrictEqual(new Point(0, -1));
    expect(navigationParser("vv")[2]).toStrictEqual(new Point(0, -2));
    expect(navigationParser("<")[1]).toStrictEqual(new Point(-1, 0));
    expect(navigationParser("<<")[2]).toStrictEqual(new Point(-2, 0));
  });
});
