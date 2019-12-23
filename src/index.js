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
  // Day1
  // directionsParser(aocData.day1Input); /*?+*/
  // Day2
  // paperProvider(aocData.day2Input); /*?+*/
  // ribbonProvider(aocData.day2Input); /*?+*/
  // Day3
  // houseRouteMapper(aocData.day3Input); /*?+*/
  // houseRouteMapper(aocData.day3Input, 2); /*?+*/
  // Day4
  // miner(aocData.day4Input, "000000"); /*?+*/
  // Day5
  // aocData.day5Input.split("\n").filter(wasNice).length; /*?+*/
  // aocData.day5Input.split("\n").filter(isNice).length; /*?+*/
  // Day6
  // let instructions = await loadDay(6);
  // let lightsArray = new LightsArray(1000, 1000);
  // lightsArray.runLightsShowOld(lightsParser(instructions)); /*?+*/
  // lightsArray.totalLight; /*?+*/
  // lightsArray = new LightsArray(1000, 1000);
  // lightsArray.runLightsShow(lightsParser(instructions));
  // lightsArray.totalLight; /*?+*/
})();

// Scratchpad
