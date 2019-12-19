import { parseElfDirections } from "../utils/dataReader";

const houseRouteMapper = (directions, santas) => {
  let coords = parseElfDirections(directions, santas);

  return {
    coords,
    uniqueHouseDeliveries: coords.length
  };
};

export default houseRouteMapper;
