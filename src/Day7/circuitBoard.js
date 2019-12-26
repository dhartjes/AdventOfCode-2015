class CircuitBoard {
  circuits;
  constructor() {
    this.circuits = [];
  }

  operate = (operation, x, y) =>
    ({
      start: scalarValue => () => scalarValue,
      and: (a, b) => () => a & b,
      or: (a, b) => () => a | b,
      lshift: (a, times) => () => a << times,
      rshift: (a, times) => () => a >>> times,
      not: a => () => 65536 + ~a
    }[operation](x, y));

  resolveCircuit = circuitName => {
    let circuit = this.circuits.find(x => x.name === circuitName);

    if (circuit.value !== undefined) {
      return circuit.value;
    }

    circuit.value = this.operate(
      circuit.operation,
      this.resolveOperand(circuit.operands[0]),
      this.resolveOperand(circuit.operands[1])
    )();

    return circuit.value;
  };

  resolveOperand = operand => {
    if (operand === undefined || !isNaN(operand)) {
      return operand;
    }

    return this.resolveCircuit(operand);
  };
}

export default CircuitBoard;
