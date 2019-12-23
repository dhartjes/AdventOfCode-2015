import navigationParser from "./navigationParser";

const houseRouteMapper = (directions, santas) => {
  let coords = navigationParser(directions, santas);

  return {
    coords,
    uniqueHouseDeliveries: coords.length
  };
};

export default houseRouteMapper;
