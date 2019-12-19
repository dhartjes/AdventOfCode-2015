import sut from "./ribbonProvider";

describe("Determines how many feet of ribbon are needed for a list of presents", () => {
  it("should get smallest perimeter plus volume of box as ribbon length", () => {
    let expectedLength = 1 + 1 + 1 + 1 + 1 * 1 * 1;
    expect(sut("1x1x1")).toBe(expectedLength);
    expectedLength = 2 + 2 + 2 + 2 + 2 * 2 * 2;
    expect(sut("2x2x2")).toBe(expectedLength);
    expectedLength = 3 + 3 + 5 + 5 + 3 * 5 * 7;
    expect(sut("3x5x7")).toBe(expectedLength);
    expect(sut("2x3x4")).toBe(34);
    expect(sut("1x1x10")).toBe(14);
  });

  it("should handle multiple boxes accurately", () => {
    let input = `1x1x1
		2x2x2
		3x5x7`;
    let expectedLength =
      1 +
      1 +
      1 +
      1 +
      1 * 1 * 1 +
      (2 + 2 + 2 + 2 + 2 * 2 * 2) +
      (3 + 3 + 5 + 5 + 3 * 5 * 7);
    expect(sut(input)).toBe(expectedLength);
  });
});
