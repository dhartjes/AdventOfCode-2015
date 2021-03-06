import boxParser, { getSurfaceArea, getSlack } from "../Domain/boxParser";

const paperProvider = boxDimensionsList => {
  let boxDimensionsArray = boxParser(boxDimensionsList);

  return boxDimensionsArray.reduce(
    (accumulator, current) =>
      accumulator + getSurfaceArea(current) + getSlack(current),
    0
  );
};

export default paperProvider;
