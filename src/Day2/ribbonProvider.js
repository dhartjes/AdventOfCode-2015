import boxParser, {
  getSmallestPerimeter,
  getVolume
} from "../Domain/boxParser";

const ribbonProvider = boxDimensionsList => {
  let boxDimensionsArray = boxParser(boxDimensionsList);

  return boxDimensionsArray.reduce(
    (accumulator, current) =>
      accumulator + getSmallestPerimeter(current) + getVolume(current),
    0
  );
};

export default ribbonProvider;
