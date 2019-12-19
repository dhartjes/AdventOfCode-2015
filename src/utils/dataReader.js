const parseBoxDimensions = input => {
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

const parseElfDirections = (directions, santas = 1) => {
  let santaCoords = [[0, 0]];

  for (let i = 1; i < santas; i++) {
    santaCoords.push([0, 0]);
  }

  let houseVisitCoords = [{ x: 0, y: 0 }];

  const checkForDupeAndPush = (x, y) =>
    houseVisitCoords.findIndex(f => f.x == x && f.y == y) == -1
      ? houseVisitCoords.push({ x, y })
      : undefined;

  const goNorth = si =>
    checkForDupeAndPush(santaCoords[si][0], ++santaCoords[si][1]);

  const goEast = si =>
    checkForDupeAndPush(++santaCoords[si][0], santaCoords[si][1]);

  const goSouth = si =>
    checkForDupeAndPush(santaCoords[si][0], --santaCoords[si][1]);

  const goWest = si =>
    checkForDupeAndPush(--santaCoords[si][0], santaCoords[si][1]);

  const moveSanta = (direction, si) => {
    switch (direction) {
      case "^":
        goNorth(si);
        break;
      case ">":
        goEast(si);
        break;
      case "v":
        goSouth(si);
        break;
      case "<":
        goWest(si);
        break;
      default:
        throw new Error("Not a cardinal direction");
    }
  };

  let santaIndex;
  for (let i = 0; i < directions.length; i++) {
    santaIndex = i % santas;
    moveSanta(directions[i], santaIndex);
  }

  return houseVisitCoords;
};

export { parseBoxDimensions, parseElfDirections };
