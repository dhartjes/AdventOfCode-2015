class CircuitBoard {
  circuits;
  constructor() {
    this.circuits = [];
  }

  resolveCircuit = circuitName => {
    let circuit = this.circuits.find(x => x.targetCircuit === circuitName);

    if (circuit.value !== undefined) {
      return circuit.value;
    }

    circuit.value = circuit.operation(
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
