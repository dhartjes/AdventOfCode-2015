"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const parser = input => {
  let firstVisitsBasement;
  var endingFloor = Array.from(input).reduce((prev, current, index) => {
    var acc = prev + (current === "(" ? 1 : -1);

    if (firstVisitsBasement === undefined && acc === -1) {
      firstVisitsBasement = index + 1;
    }

    return acc;
  }, 0);
  return {
    endingFloor,
    firstVisitsBasement
  };
};

var _default = parser;
exports.default = _default;
//# sourceMappingURL=directionsParser.js.map