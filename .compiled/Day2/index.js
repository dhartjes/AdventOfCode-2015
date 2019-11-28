"use strict";

var _paperProvider = _interopRequireDefault(require("./paperProvider"));

var _aocInputFetcher = _interopRequireDefault(require("../utils/aocInputFetcher"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(async () => {
  const aocInput = await (0, _aocInputFetcher.default)("https://adventofcode.com/2015/day/2/input");
  /*?+*/

  aocInput.split("\n");
  /*?+*/

  var a = (0, _paperProvider.default)(aocInput);
  /*?+*/
})();
//# sourceMappingURL=index.js.map