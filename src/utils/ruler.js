const getSurfaceArea = box =>
  2 * box.h * box.w + 2 * box.w * box.d + 2 * box.d * box.h;

const getSlack = box => Math.min(box.h * box.w, box.w * box.d, box.d * box.h);

const getSmallestPerimeter = box => {
  let dimensions = [box.h, box.w, box.d].sort((a, b) => a - b);
  return dimensions[0] * 2 + dimensions[1] * 2;
};

const getVolume = box => box.h * box.w * box.d;

export { getSurfaceArea, getSlack, getSmallestPerimeter, getVolume };
