"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const paperProvider = boxDimensions => {
  let array = boxDimensions.split("\n");
  return array.reduce((prev, current) => {
    let dimensions = current.split("x");
    let surfaceArea = 2 * Number.parseInt(dimensions[0]) * Number.parseInt(dimensions[1]) + 2 * Number.parseInt(dimensions[1]) * Number.parseInt(dimensions[2]) + 2 * Number.parseInt(dimensions[0]) * Number.parseInt(dimensions[2]);
    return prev + surfaceArea;
  }, 0);
};

var _default = paperProvider;
exports.default = _default;
//# sourceMappingURL=paperProvider.js.map