import paperProvider from "./paperProvider";
import getAocInput from "../utils/aocInputFetcher";

(async () => {
  const aocInput = await getAocInput(
    "https://adventofcode.com/2015/day/2/input"
  ); /*?+*/

  aocInput.split("\n"); /*?+*/
  var sqFeetPaper = paperProvider(aocInput); /*?+*/
  var feetRibbon = ribbonProvider(aocInput); /*?+*/
})();
