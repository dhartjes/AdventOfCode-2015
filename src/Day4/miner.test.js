import sut, { hash } from "./miner";

describe("miner.js finds the lowest positive number which when hashed returns a hash that starts with five zeroes", () => {
  it("should perform a md5 hash returning an expected value", () => {
    let input = "The quick brown fox jumps over the lazy dog";
    let expectedResult = "9e107d9d372bb6826bd81d3542a419d6";
    expect(hash(input)).toBe(expectedResult);

    input = "The quick brown fox jumps over the lazy dog.";
    expectedResult = "e4d909c290d0fb1ca068ffaddf22cbd0";
    expect(hash(input)).toBe(expectedResult);

    input = "";
    expectedResult = "d41d8cd98f00b204e9800998ecf8427e";
  });

  it("should find first number with 1 leading 0", () => {
    let result = sut("abc", "0");
    expect(result.index).toBeGreaterThan(0);
    expect(result.hashed.substring(0, 1)).toBe("0");
  });

  it.skip("should find first number with 5 leading 0's", () => {
    let result = sut("abc");
    expect(result.index).toBeGreaterThan(0);
    expect(result.hashed.substring(0, 5)).toBe("00000");
  });

  it.skip("should find first number with 6 leading 0's", () => {
    let result = sut("abc", "000000");
    expect(result.index).toBeGreaterThan(0);
    expect(result.hashed.substring(0, 6)).toBe("000000");
  });
});
