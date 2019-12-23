import Point from "../Model/Point";

const navigationParser = (directions, santas = 1) => {
  let santaCoords = [[0, 0]];

  for (let i = 1; i < santas; i++) {
    santaCoords.push([0, 0]);
  }

  let houseVisitCoords = [new Point(0, 0)];

  const checkForDupeAndPush = (x, y) =>
    houseVisitCoords.findIndex(f => f.x == x && f.y == y) == -1
      ? houseVisitCoords.push(new Point(x, y))
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

export default navigationParser;
