import { parseBoxDimensions } from "../utils/dataReader";
import { getSurfaceArea, getSlack } from "../utils/ruler";

const paperProvider = boxDimensionsList => {
  let boxDimensionsArray = parseBoxDimensions(boxDimensionsList);

  return boxDimensionsArray.reduce(
    (accumulator, current) =>
      accumulator + getSurfaceArea(current) + getSlack(current),
    0
  );
};

export default paperProvider;
