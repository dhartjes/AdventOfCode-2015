import paperProvider from "./Day2/paperProvider";
import directionsParser from "./Day1/directionsParser";
import dataAccessor, { preLoadData, loadDay } from "./Data/dataAccessor";
import houseRouteMapper from "./Day3/houseRouteMapper";
import ribbonProvider from "./Day2/ribbonProvider";
import miner from "./Day4/miner";
import { wasNice, isNice } from "./Day5/alignmentChecker";

(async () => {
  // Async scratchpad
  let aocData = await preLoadData(); /*?+*/
  // directionsParser(aocData.day1Input); /*?+*/
  // paperProvider(aocData.day2Input); /*?+*/
  // ribbonProvider(aocData.day2Input); /*?+*/
  // houseRouteMapper(aocData.day3Input); /*?+*/
  // houseRouteMapper(aocData.day3Input, 2); /*?+*/
  // miner(aocData.day4Input, "000000"); /*?+*/

  aocData.day5Input.split("\n").filter(wasNice).length; /*?+*/
  aocData.day5Input.split("\n").filter(isNice).length; /*?+*/
})();

// Scratchpad
