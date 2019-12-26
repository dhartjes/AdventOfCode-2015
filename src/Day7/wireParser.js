import lineEndingFixer from "../utils/lineEndingFixer";
import CircuitBoard from "./circuitBoard";

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
      let operands = determineOperands(split[0]);
      let wires = {
        name: split[1],
        operation: determineWireType(split[0]),
        operands,
        value:
          operands[1] === undefined && !isNaN(operands[0])
            ? operands[0]
            : undefined
      };
      circuitBoard.circuits.push(wires);
    });

    return circuitBoard;
  }
};

export default wireParser;
