const parseDimensions = input => {
    var dimensions = input
        .replace(/\r\n/g, "\n")
        .replace(/\r/g, "\n")
        .trim()
        .split("\n")
        .filter(Boolean);

    return dimensions.map(box => {
        let dimensions = box.split("x");
        return {
            h: Number.parseInt(dimensions[0]) * Number.parseInt(dimensions[1]),
            w: Number.parseInt(dimensions[1]) * Number.parseInt(dimensions[2]),
            d: Number.parseInt(dimensions[0]) * Number.parseInt(dimensions[2])
        };
    });
};

const getSurfaceArea = box => {
  let surfaceArea = 2 * box.h + 2 * box.w + 2 * box.d;
  return surfaceArea;
};

const getSlack = box => Math.min(box.h, box.w, box.d);

const getSmallestPerimeter = box => {
    let dimensions = [box.h, box.w, box.d];
    let sorted = dimensions.sort();
    return sorted[0] * 2 + sorted[1] * 2;    
};

export {
    parseDimensions,
    getSurfaceArea,
    getSlack,
    getSmallestPerimeter
};