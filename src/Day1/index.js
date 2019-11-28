import parser from "./directionsParser";
import getAocInput from "../utils/aocInputFetcher";

(async () => {
  const aocInput = await getAocInput(
    "https://adventofcode.com/2015/day/1/input"
  );
  aocInput.length; /*?+*/
  parser(aocInput); /*?+*/
})();

parser("("); /*?+*/
parser(")"); /*?+*/
parser("))"); /*?+*/
parser("(("); /*?+*/
parser("()()()(("); /*?+*/
parser("()()()))"); /*?+*/
parser("()())"); /*?+*/
