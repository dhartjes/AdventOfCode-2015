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
  constructor(operation = "start") {
    this.operation = operations(operation);
  }

  go = (x, y) => this.operation(x, y);
}

export default Circuit;
