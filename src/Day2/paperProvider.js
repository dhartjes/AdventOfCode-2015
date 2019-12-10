const measurePaper = box => {
  let dimensions = box.split("x");
  let h = Number.parseInt(dimensions[0]) * Number.parseInt(dimensions[1]);
  let w = Number.parseInt(dimensions[1]) * Number.parseInt(dimensions[2]);
  let d = Number.parseInt(dimensions[0]) * Number.parseInt(dimensions[2]);
  let surfaceArea = 2 * h + 2 * w + 2 * d;
  let slack = Math.min(h, w, d);
  return surfaceArea + slack;
};

const paperProvider = boxDimensionsList => {
  let boxDimensionsArray = boxDimensionsList
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .trim()
    .split("\n")
    .filter(Boolean);

  var sum = boxDimensionsArray.reduce(
    (accumulator, current) => accumulator + measurePaper(current),
    0
  );

  return sum;
};

export default paperProvider;
