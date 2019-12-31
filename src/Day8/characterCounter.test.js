import sut from "./characterCounter";

describe("Character counter determines amount of in-memory characters given a string literal", () => {
  it("should count \\ as 1", () => {
    var result = sut(String.raw`"\\"`);

    expect(result.reducedSize).toBe(1);
    expect(result.originalSize).toBe(4);
    expect(result.increasedSize).toBe(8);
  });

  it(String.raw`should count \" as 1`, () => {
    var result = sut(String.raw`"\""`);
    expect(result.reducedSize).toBe(1);
    expect(result.originalSize).toBe(4);
  });

  it(String.raw`should count \x?? as 1`, () => {
    let result = sut(String.raw`"\x34"`);
    expect(result.reducedSize).toBe(1);
    expect(result.originalSize).toBe(6);
  });

  it('should not count outermost ""s', () => {
    let result = sut('""');
    expect(result.reducedSize).toBe(0);
    expect(result.originalSize).toBe(2);
  });

  it("should not count whitespace characters", () => {
    let result = sut('" "');
    expect(result.reducedSize).toBe(0);
    expect(result.originalSize).toBe(2);
  });

  it("should count all in memory characters", () => {
    let result = sut(String.raw`"byc\x9dyxuafof\\\xa6uf\\axf\"ozomj\\olh\x6a"`);

    expect(result.reducedSize).toBe(30);
    expect(result.originalSize).toBe(45);
  });

  it("should handle multiple rows of input", () => {
    let result = sut(String.raw`"a"
"b"`);

    expect(result.reducedSize).toBe(2);
    expect(result.originalSize).toBe(6);
  });
});
