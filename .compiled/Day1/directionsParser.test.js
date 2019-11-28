"use strict";

var _directionsParser = _interopRequireDefault(require("./directionsParser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Directions Parser", () => {
  it('should parse "(" to 1', () => {
    expect((0, _directionsParser.default)("(").endingFloor).toBe(1);
  });
  it('should parse ")" to -1', () => {
    expect((0, _directionsParser.default)(")").endingFloor).toBe(-1);
  });
  it('should parse "()" to 0', () => {
    expect((0, _directionsParser.default)("()").endingFloor).toBe(0);
  });
  it('should parse ")(" to be 0', () => {
    expect((0, _directionsParser.default)(")(").endingFloor).toBe(0);
  });
  it("should be positive if more (", () => {
    expect((0, _directionsParser.default)("((((((((((()))((((((((").endingFloor).toBeGreaterThan(0);
  });
  it("should be negative if more )", () => {
    expect((0, _directionsParser.default)("))))))))((())))))))))))))").endingFloor).toBeLessThan(0);
  });
  it("parses ()()( to equal 1", () => {
    expect((0, _directionsParser.default)("()()(").endingFloor).toBe(1);
  });
  it("parses ()()) to equal -1", () => {
    expect((0, _directionsParser.default)("()())").endingFloor).toBe(-1);
  });
  it("should enter bottom floor at 1", () => {
    expect((0, _directionsParser.default)(")").firstVisitsBasement).toBe(1);
  });
  it("should enter bottom floor at 3", () => {
    expect((0, _directionsParser.default)("())").firstVisitsBasement).toBe(3);
  });
  it("should enter bottom floor at 11", () => {
    expect((0, _directionsParser.default)("((((())))))").firstVisitsBasement).toBe(11);
  });
});
//# sourceMappingURL=directionsParser.test.js.map