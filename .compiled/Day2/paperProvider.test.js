"use strict";

var _paperProvider = _interopRequireDefault(require("./paperProvider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Determines how many sq feet of wrapping paper are needed for an array of boxes", () => {
  it("should be 7 for 1x1x1 cube", () => {
    expect((0, _paperProvider.default)("1x1x1")).toBe(7);
  });
});
//# sourceMappingURL=paperProvider.test.js.map