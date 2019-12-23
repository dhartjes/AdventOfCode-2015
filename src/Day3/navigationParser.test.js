import navigationParser from "./navigationParser";

describe("navigationParser takes input and parses into an array of locations reached", () => {
  it("should parse elf directions into x,y coords", () => {
    expect(navigationParser("^").length).toBe(2);
    expect(navigationParser("^>").length).toBe(3);
    expect(navigationParser("^")[1]).toStrictEqual({ x: 0, y: 1 });
    expect(navigationParser("^^")[2]).toStrictEqual({ x: 0, y: 2 });
    expect(navigationParser(">")[1]).toStrictEqual({ x: 1, y: 0 });
    expect(navigationParser(">>")[2]).toStrictEqual({ x: 2, y: 0 });
    expect(navigationParser("v")[1]).toStrictEqual({ x: 0, y: -1 });
    expect(navigationParser("vv")[2]).toStrictEqual({ x: 0, y: -2 });
    expect(navigationParser("<")[1]).toStrictEqual({ x: -1, y: 0 });
    expect(navigationParser("<<")[2]).toStrictEqual({ x: -2, y: 0 });
  });
});
