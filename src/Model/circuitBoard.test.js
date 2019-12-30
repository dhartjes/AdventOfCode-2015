import CircuitBoard from "./CircuitBoard";
import wireParser from "../Day7/wireParser";
import Circuit from "./Circuit";

let sut;

describe("circuitBoard has an array of wires and can find the shortest path to an end wire", () => {
  beforeEach(() => {
    sut = new CircuitBoard();
  });

  it("should convert instructions to runnable operation", () => {
    sut = wireParser.assembleCircuitBoard("hg OR hh -> hi");
    sut.circuits.push(new Circuit("hg", [123], "start"));
    sut.circuits.push(new Circuit("hh", [456], "start"));
    expect(sut.resolveCircuit("hi")).toBe(507);
  });

  it("should daisy chain operations", () => {
    sut = wireParser.assembleCircuitBoard(`123 -> x
456 -> y
x AND y -> d
x OR y -> e
x LSHIFT 2 -> f
y RSHIFT 2 -> g
NOT x -> h
NOT y -> i`);

    expect(sut.circuits.length).toBe(8);

    expect(sut.resolveCircuit("x")).toBe(123);
    expect(sut.resolveCircuit("y")).toBe(456);
    expect(sut.resolveCircuit("d")).toBe(72);
    expect(sut.resolveCircuit("e")).toBe(507);
    expect(sut.resolveCircuit("f")).toBe(492);
    expect(sut.resolveCircuit("g")).toBe(114);
    expect(sut.resolveCircuit("h")).toBe(65412);
    expect(sut.resolveCircuit("i")).toBe(65079);
  });
});
