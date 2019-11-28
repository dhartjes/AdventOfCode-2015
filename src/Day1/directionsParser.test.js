import sut from "./directionsParser";

describe("Directions Parser", () => {
  it('should parse "(" to 1', () => {
    expect(sut("(").endingFloor).toBe(1);
  });

  it('should parse ")" to -1', () => {
    expect(sut(")").endingFloor).toBe(-1);
  });

  it('should parse "()" to 0', () => {
    expect(sut("()").endingFloor).toBe(0);
  });

  it('should parse ")(" to be 0', () => {
    expect(sut(")(").endingFloor).toBe(0);
  });

  it("should be positive if more (", () => {
    expect(sut("((((((((((()))((((((((").endingFloor).toBeGreaterThan(0);
  });

  it("should be negative if more )", () => {
    expect(sut("))))))))((())))))))))))))").endingFloor).toBeLessThan(0);
  });

  it("parses ()()( to equal 1", () => {
    expect(sut("()()(").endingFloor).toBe(1);
  });

  it("parses ()()) to equal -1", () => {
    expect(sut("()())").endingFloor).toBe(-1);
  });

  it("should enter bottom floor at 1", () => {
    expect(sut(")").firstVisitsBasement).toBe(1);
  });

  it("should enter bottom floor at 3", () => {
    expect(sut("())").firstVisitsBasement).toBe(3);
  });

  it("should enter bottom floor at 11", () => {
    expect(sut("((((())))))").firstVisitsBasement).toBe(11);
  });
});
