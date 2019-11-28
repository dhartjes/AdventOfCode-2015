"use strict";

var _directionsParser = _interopRequireDefault(require("./directionsParser"));

var _aocInputFetcher = _interopRequireDefault(require("../utils/aocInputFetcher"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(async () => {
  const aocInput = await (0, _aocInputFetcher.default)("https://adventofcode.com/2015/day/1/input");
  aocInput.length;
  /*?+*/

  (0, _directionsParser.default)(aocInput);
  /*?+*/
})();

(0, _directionsParser.default)("(");
/*?+*/

(0, _directionsParser.default)(")");
/*?+*/

(0, _directionsParser.default)("))");
/*?+*/

(0, _directionsParser.default)("((");
/*?+*/

(0, _directionsParser.default)("()()()((");
/*?+*/

(0, _directionsParser.default)("()()()))");
/*?+*/

(0, _directionsParser.default)("()())");
/*?+*/
//# sourceMappingURL=index.js.map