import { parseBoxDimensions } from "../utils/dataReader";
import { getSmallestPerimeter, getVolume } from "../utils/ruler";

const ribbonProvider = boxDimensionsList => {
  let boxDimensionsArray = parseBoxDimensions(boxDimensionsList);

  return boxDimensionsArray.reduce(
    (accumulator, current) =>
      accumulator + getSmallestPerimeter(current) + getVolume(current),
    0
  );
};

export default ribbonProvider;
