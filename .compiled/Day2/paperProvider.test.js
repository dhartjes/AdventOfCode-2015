"use strict";

var _paperProvider = _interopRequireDefault(require("./paperProvider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Determines how many sq feet of wrapping paper are needed for an array of boxes", () => {
  it("should be 8 for 1x1x1 cube", () => {
    expect((0, _paperProvider.default)("1x1x1")).toBe(8);
  });
  it("should be 12 for a 2x1x1 cube", () => {
    expect((0, _paperProvider.default)("2x1x1")).toBe(12);
  });
  it("should be 20 for a 2x2x1 cube", () => {
    expect((0, _paperProvider.default)("2x2x1")).toBe(20);
  });
  it("should be 40 for cubes [2x1x1,1x1x1,2x2x1]", () => {
    let input = `2x1x1
		1x1x1
		2x2x1`;
    expect((0, _paperProvider.default)(input)).toBe(40);
  });
  it("should be big for a 111x222x333 cube", () => {
    let input = "1111x222x3333";
    expect((0, _paperProvider.default)(input)).toBe(40);
  });
});
//# sourceMappingURL=paperProvider.test.js.map