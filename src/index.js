import paperProvider from "./Day2/paperProvider";
import directionsParser from "./Day1/directionsParser";
import dataAccessor, { preLoadData, loadDay } from "./Data/dataAccessor";
import houseRouteMapper from "./Day3/houseRouteMapper";
import ribbonProvider from "./Day2/ribbonProvider";
import miner from "./Day4/miner";
import lightsParser from "./Day6/lightsParser";
import { wasNice, isNice } from "./Day5/alignmentChecker";
import LightsArray from "./Day6/lightsArray";

(async () => {
  // Async scratchpad
  //let aocData = await preLoadData(); /*?+*/
  // directionsParser(aocData.day1Input); /*?+*/
  // paperProvider(aocData.day2Input); /*?+*/
  // ribbonProvider(aocData.day2Input); /*?+*/
  // houseRouteMapper(aocData.day3Input); /*?+*/
  // houseRouteMapper(aocData.day3Input, 2); /*?+*/
  // miner(aocData.day4Input, "000000"); /*?+*/
  // aocData.day5Input.split("\n").filter(wasNice).length; /*?+*/
  // aocData.day5Input.split("\n").filter(isNice).length; /*?+*/
})();

// Scratchpad
let lightsArray = new LightsArray(3, 3); /*?+*/
lightsArray.turnOn({ x: 0, y: 0 }, { x: 2, y: 2 });
lightsArray; /*?+*/
lightsArray.totalLit; /*?+*/
lightsParser("turn on 1,1 through 2,2"); /*?+*/
