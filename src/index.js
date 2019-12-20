import paperProvider from "./Day2/paperProvider";
import directionsParser from "./Day1/directionsParser";
import getAocInput from "./utils/aocInputFetcher";
import houseRouteMapper from "./Day3/houseRouteMapper";
import ribbonProvider from "./Day2/ribbonProvider";
import miner from "./Day4/miner";

let day1Input, day2Input, day3Input, day4Input;

const getAllInput = async () => {
  day1Input = await getAocInput("https://adventofcode.com/2015/day/1/input");
  day2Input = await getAocInput("https://adventofcode.com/2015/day/2/input");
  day3Input = await getAocInput("https://adventofcode.com/2015/day/3/input");
  day4Input = "ckczppom";
};

(async () => {
  await getAllInput();

  // directionsParser(day1Input); /*?+*/
  // paperProvider(day2Input); /*?+*/
  // ribbonProvider(day2Input); /*?+*/
  // houseRouteMapper(day3Input); /*?+*/
  // houseRouteMapper(day3Input, 2); /*?+*/
  miner(day4Input, "000000"); /*?+*/
})();
