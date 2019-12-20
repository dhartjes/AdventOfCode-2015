import sut from "./miner";

describe("miner.js finds the lowest positive number which when hashed returns a hash that starts with five zeroes", () => {
  it("should perform a md5 hash returning an expected value", () => {
    let input = "The quick brown fox jumps over the lazy dog";
    let expectedResult = "9e107d9d372bb6826bd81d3542a419d6";
    expect(sut(input)).toBe(expectedResult);

    input = "The quick brown fox jumps over the lazy dog.";
    expectedResult = "e4d909c290d0fb1ca068ffaddf22cbd0";
    expect(sut(input)).toBe(expectedResult);

    input = "";
    expectedResult = "d41d8cd98f00b204e9800998ecf8427e";
  });
});
