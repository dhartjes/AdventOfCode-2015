import { parseDimensions, getSurfaceArea, getSlack } from '../utils/ruler';

const paperProvider = boxDimensionsList => {
  let boxDimensionsArray = parseDimensions(boxDimensionsList);

  var sum = boxDimensionsArray.reduce(
    (accumulator, current) => accumulator + getSurfaceArea(current) + getSlack(current),
    0
  );

  return sum;
};

export default paperProvider;
