export const operations = operation =>
  ({
    start: scalarValue => () => scalarValue,
    and: (a, b) => () => a & b,
    or: (a, b) => () => a | b,
    lshift: (a, times) => () => a << times,
    rshift: (a, times) => () => a >>> times,
    not: a => () => 65536 + ~a
  }[operation]);

class Circuit {
  operation;
  value;
  operands;
  targetCircuit;

  constructor(targetCircuit, operands, operation = "start") {
    this.targetCircuit = targetCircuit;
    this.operands = operands;
    this.operation = operations(operation);
    this.reset();
  }

  go = () => {
    if (
      typeof this.operands[0] === "function" ||
      typeof this.operands[1] === "function"
    ) {
      throw Error(
        "This circuit depends on other circuits to run. Must be run via CircuitBoard.resolveCircuit"
      );
    }
    this.value = this.operation(this.operands[0], this.operands[1])();
    return this.value;
  };

  reset = () =>
    (this.value =
      this.operation.name === "start" ? this.operands[0] : undefined);
}

export default Circuit;
