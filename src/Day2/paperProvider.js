const measurePaper = box => {
  let dimensions = box.split("x");
  let h = 2 * Number.parseInt(dimensions[0]) * Number.parseInt(dimensions[1]);
  let w = 2 * Number.parseInt(dimensions[1]) * Number.parseInt(dimensions[2]);
  let d = 2 * Number.parseInt(dimensions[0]) * Number.parseInt(dimensions[2]);
  let surfaceArea = h + w + d;
  let slack = Math.min(h, w, d);
  return surfaceArea + slack;
};

const paperProvider = boxDimensionsList => {
  let boxDimensionsArray = boxDimensionsList
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .replace(/\n/g, "|")
    .split("|");

  var sum = boxDimensionsArray.reduce(
    (accumulator, current) => accumulator + measurePaper(current),
    0
  );

  return sum;
};

export default paperProvider;
