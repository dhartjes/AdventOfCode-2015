import sut, { operate } from "./wireParser";

describe("wireParser takes wire instructions and assembles circuit board", () => {
  it("should create a wire with an int value", () => {
    let x = operate("start", 123);
    expect(x()).toBe(123);
    let y = operate("start", 456);
    expect(y()).toBe(456);
  });

  it("should perform a bitwise AND operation", () => {
    let x = operate("start", 123);
    let y = operate("start", 456);
    let d = operate("and", x(), y());
    expect(d()).toBe(72);
  });

  it("should perform a bitwise OR operation", () => {
    let x = operate("start", 123);
    let y = operate("start", 456);
    let e = operate("or", x(), y());
    expect(e()).toBe(507);
  });

  it("should perform a bitwise LShift operation", () => {
    let x = operate("start", 123);
    let f = operate("lshift", x(), 2);
    expect(f()).toBe(492);
  });

  it("should perform a bitwise RShift operation", () => {
    let y = operate("start", 456);
    let g = operate("rshift", y(), 2);
    expect(g()).toBe(114);
  });

  it("should perform a bitwise NOT operation", () => {
    let x = operate("start", 123);
    let y = operate("start", 456);
    let h = operate("not", x());
    expect(h()).toBe(65412);
    let i = operate("not", y());
    expect(i()).toBe(65079);
  });

  it("should parse wire instructions into appropriate wire types", () => {
    let x = sut.readInstructions("123 -> x");
    expect(x).toStrictEqual([
      {
        name: "x",
        operands: [123],
        operation: "start"
      }
    ]);

    x = sut.readInstructions("af AND ah -> ai");
    expect(x).toStrictEqual([
      {
        name: "ai",
        operands: ["af", "ah"],
        operation: "and"
      }
    ]);

    x = sut.readInstructions("NOT lk -> ll");
    expect(x).toStrictEqual([
      {
        name: "ll",
        operands: ["lk"],
        operation: "not"
      }
    ]);

    x = sut.readInstructions("hz RSHIFT 1 -> is");
    expect(x).toStrictEqual([
      {
        name: "is",
        operands: ["hz", 1],
        operation: "rshift"
      }
    ]);

    x = sut.readInstructions("an LSHIFT 15 -> ar");
    expect(x).toStrictEqual([
      {
        name: "ar",
        operands: ["an", 15],
        operation: "lshift"
      }
    ]);

    x = sut.readInstructions("hg OR hh -> hi");
    expect(x).toStrictEqual([
      {
        name: "hi",
        operands: ["hg", "hh"],
        operation: "or"
      }
    ]);
  });

  it("should convert instructions to runnable operation", () => {
    let x = operate("start", 123);
    let y = operate("start", 456);

    let instructions = sut.readInstructions("hg OR hh -> hi");
    let e = operate(instructions[0].operation, x(), y());
    expect(e()).toBe(507);
  });

  it("should generate multiple instructions", () => {
    let instructions = sut.readInstructions(`
123 -> x
af AND ah -> ai
NOT lk -> ll
hz RSHIFT 1 -> is
an LSHIFT 15 -> ar
ht OR hh -> hi
`);

    expect(instructions).toStrictEqual([
      {
        name: "x",
        operands: [123],
        operation: "start"
      },
      {
        name: "ai",
        operands: ["af", "ah"],
        operation: "and"
      },
      {
        name: "ll",
        operands: ["lk"],
        operation: "not"
      },
      {
        name: "is",
        operands: ["hz", 1],
        operation: "rshift"
      },
      {
        name: "ar",
        operands: ["an", 15],
        operation: "lshift"
      },
      {
        name: "hi",
        operands: ["ht", "hh"],
        operation: "or"
      }
    ]);
  });

  it("should daisy chain operations", () => {
    let instructions = sut.readInstructions(`123 -> x
456 -> y
x AND y -> d
x OR y -> e
x LSHIFT 2 -> f
y RSHIFT 2 -> g
NOT x -> h
NOT y -> i`);

    expect(instructions.length).toBe(8);

    expect(sut.runToWire(instructions, "x")).toBe(123);
    expect(sut.runToWire(instructions, "y")).toBe(456);
    expect(sut.runToWire(instructions, "d")).toBe(72);
    expect(sut.runToWire(instructions, "e")).toBe(507);
    expect(sut.runToWire(instructions, "f")).toBe(492);
    expect(sut.runToWire(instructions, "g")).toBe(114);
    expect(sut.runToWire(instructions, "h")).toBe(65412);
    expect(sut.runToWire(instructions, "i")).toBe(65079);
  });
});
