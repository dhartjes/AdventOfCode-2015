const boxParser = input => {
  let dimensions = input
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .trim()
    .split("\n")
    .filter(Boolean);

  return dimensions.map(box => {
    let dimensions = box.split("x");
    return {
      h: Number.parseInt(dimensions[0]),
      w: Number.parseInt(dimensions[1]),
      d: Number.parseInt(dimensions[2])
    };
  });
};

const getSurfaceArea = box =>
  2 * box.h * box.w + 2 * box.w * box.d + 2 * box.d * box.h;

const getSlack = box => Math.min(box.h * box.w, box.w * box.d, box.d * box.h);

const getSmallestPerimeter = box => {
  let dimensions = [box.h, box.w, box.d].sort((a, b) => a - b);
  return dimensions[0] * 2 + dimensions[1] * 2;
};

const getVolume = box => box.h * box.w * box.d;

export { getSurfaceArea, getSlack, getSmallestPerimeter, getVolume };

export default boxParser;
