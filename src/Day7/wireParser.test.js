import sut from "./wireParser";

describe("wireParser takes wire instructions and assembles circuit board", () => {
  it("should parse wire instructions into appropriate wire types", () => {
    let circuitBoard = sut.assembleCircuitBoard("123 -> x");
    expect(circuitBoard.circuits).toStrictEqual([
      {
        name: "x",
        operands: [123],
        operation: "start",
        value: 123
      }
    ]);

    circuitBoard = sut.assembleCircuitBoard("af AND ah -> ai");
    expect(circuitBoard.circuits).toStrictEqual([
      {
        name: "ai",
        operands: ["af", "ah"],
        operation: "and",
        value: undefined
      }
    ]);

    circuitBoard = sut.assembleCircuitBoard("NOT lk -> ll");
    expect(circuitBoard.circuits).toStrictEqual([
      {
        name: "ll",
        operands: ["lk"],
        operation: "not",
        value: undefined
      }
    ]);

    circuitBoard = sut.assembleCircuitBoard("hz RSHIFT 1 -> is");
    expect(circuitBoard.circuits).toStrictEqual([
      {
        name: "is",
        operands: ["hz", 1],
        operation: "rshift",
        value: undefined
      }
    ]);

    circuitBoard = sut.assembleCircuitBoard("an LSHIFT 15 -> ar");
    expect(circuitBoard.circuits).toStrictEqual([
      {
        name: "ar",
        operands: ["an", 15],
        operation: "lshift",
        value: undefined
      }
    ]);

    circuitBoard = sut.assembleCircuitBoard("hg OR hh -> hi");
    expect(circuitBoard.circuits).toStrictEqual([
      {
        name: "hi",
        operands: ["hg", "hh"],
        operation: "or",
        value: undefined
      }
    ]);
  });

  it("should generate multiple instructions", () => {
    let circuitBoard = sut.assembleCircuitBoard(`
123 -> x
af AND ah -> ai
NOT lk -> ll
hz RSHIFT 1 -> is
an LSHIFT 15 -> ar
ht OR hh -> hi
`);

    expect(circuitBoard.circuits).toStrictEqual([
      {
        name: "x",
        operands: [123],
        operation: "start",
        value: 123
      },
      {
        name: "ai",
        operands: ["af", "ah"],
        operation: "and",
        value: undefined
      },
      {
        name: "ll",
        operands: ["lk"],
        operation: "not",
        value: undefined
      },
      {
        name: "is",
        operands: ["hz", 1],
        operation: "rshift",
        value: undefined
      },
      {
        name: "ar",
        operands: ["an", 15],
        operation: "lshift",
        value: undefined
      },
      {
        name: "hi",
        operands: ["ht", "hh"],
        operation: "or",
        value: undefined
      }
    ]);
  });
});
