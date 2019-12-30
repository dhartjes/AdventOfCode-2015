import lineEndingFixer from "../utils/lineEndingFixer";
import CircuitBoard from "../Model/CircuitBoard";
import Circuit from "../Model/Circuit";

export const determineWireType = commandString => {
  let found = commandString.match(/[A-Z]+/);
  return found === null ? "start" : found[0].toLowerCase();
};

export const determineOperands = commandString => {
  let found = commandString.match(/[a-z0-9]+/g);
  return found.map(element =>
    !isNaN(element) ? Number.parseInt(element) : element
  );
};

const wireParser = {
  assembleCircuitBoard: input => {
    let circuitBoard = new CircuitBoard();
    let lines = lineEndingFixer(input)
      .trim()
      .split("\n")
      .filter(Boolean);

    lines.forEach(line => {
      let split = line.split(" -> ");

      let circuit = new Circuit(
        split[1],
        determineOperands(split[0]),
        determineWireType(split[0])
      );

      circuitBoard.circuits.push(circuit);
    });

    return circuitBoard;
  }
};

export default wireParser;
