import lineEndingFixer from "../utils/lineEndingFixer";

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

export const operate = (operation, x, y) =>
  ({
    start: scalarValue => () => scalarValue,
    and: (a, b) => () => a & b,
    or: (a, b) => () => a | b,
    lshift: (a, times) => () => a << times,
    rshift: (a, times) => () => a >>> times,
    not: a => () => 65536 + ~a
  }[operation](x, y));

const wireParser = {
  readInstructions: input => {
    let instructions = [];
    let lines = lineEndingFixer(input)
      .trim()
      .split("\n")
      .filter(Boolean);

    lines.forEach(line => {
      let split = line.split(" -> ");
      let wires = {
        name: split[1],
        operation: determineWireType(split[0]),
        operands: determineOperands(split[0])
      };
      instructions.push(wires);
    });

    return instructions;
  },
  runToWire: (instructions, wire) => {
    let instruction = instructions.find(x => x.name === wire);

    function resolveOperand(operand) {
      if (operand === undefined || !isNaN(operand)) {
        return operand;
      }

      let subCircuit = instructions.find(x => x.name === operand);

      return operate(
        subCircuit.operation,
        resolveOperand(subCircuit.operands[0]),
        resolveOperand(subCircuit.operands[1])
      )();
    }

    return operate(
      instruction.operation,
      resolveOperand(instruction.operands[0]),
      resolveOperand(instruction.operands[1])
    )();
  }
};

export default wireParser;
