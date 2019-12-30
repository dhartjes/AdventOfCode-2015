import sut from "./wireParser";
import Circuit from "../Model/Circuit";
import { _ } from "core-js";

describe("wireParser takes wire instructions and assembles circuit board", () => {
  it("should parse wire instructions into appropriate wire types", () => {
    let circuitBoard = sut.assembleCircuitBoard("123 -> x");

    expect(circuitBoard.circuits[0].targetCircuit).toBe("x");
    expect(circuitBoard.circuits[0].operands).toStrictEqual([123]);
    expect(circuitBoard.circuits[0]).toBeInstanceOf(Circuit);
    expect(circuitBoard.circuits[0].operation.name).toBe("start");
    expect(circuitBoard.circuits[0].value).toBe(123);

    circuitBoard = sut.assembleCircuitBoard("af AND ah -> ai");

    expect(circuitBoard.circuits[0].targetCircuit).toBe("ai");
    expect(circuitBoard.circuits[0].operands).toStrictEqual(["af", "ah"]);
    expect(circuitBoard.circuits[0]).toBeInstanceOf(Circuit);
    expect(circuitBoard.circuits[0].operation.name).toBe("and");
    expect(circuitBoard.circuits[0].value).toBeUndefined();

    circuitBoard = sut.assembleCircuitBoard("NOT lk -> ll");

    expect(circuitBoard.circuits[0].targetCircuit).toBe("ll");
    expect(circuitBoard.circuits[0].operands).toStrictEqual(["lk"]);
    expect(circuitBoard.circuits[0]).toBeInstanceOf(Circuit);
    expect(circuitBoard.circuits[0].operation.name).toBe("not");
    expect(circuitBoard.circuits[0].value).toBeUndefined();

    circuitBoard = sut.assembleCircuitBoard("hz RSHIFT 1 -> is");

    expect(circuitBoard.circuits[0].targetCircuit).toBe("is");
    expect(circuitBoard.circuits[0].operands).toStrictEqual(["hz", 1]);
    expect(circuitBoard.circuits[0]).toBeInstanceOf(Circuit);
    expect(circuitBoard.circuits[0].operation.name).toBe("rshift");
    expect(circuitBoard.circuits[0].value).toBeUndefined();

    circuitBoard = sut.assembleCircuitBoard("an LSHIFT 15 -> ar");

    expect(circuitBoard.circuits[0].targetCircuit).toBe("ar");
    expect(circuitBoard.circuits[0].operands).toStrictEqual(["an", 15]);
    expect(circuitBoard.circuits[0]).toBeInstanceOf(Circuit);
    expect(circuitBoard.circuits[0].operation.name).toBe("lshift");
    expect(circuitBoard.circuits[0].value).toBeUndefined();

    circuitBoard = sut.assembleCircuitBoard("hg OR hh -> hi");

    expect(circuitBoard.circuits[0].targetCircuit).toBe("hi");
    expect(circuitBoard.circuits[0].operands).toStrictEqual(["hg", "hh"]);
    expect(circuitBoard.circuits[0]).toBeInstanceOf(Circuit);
    expect(circuitBoard.circuits[0].operation.name).toBe("or");
    expect(circuitBoard.circuits[0].value).toBeUndefined();
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

    expect(circuitBoard.circuits[0].targetCircuit).toBe("x");
    expect(circuitBoard.circuits[0].operands).toStrictEqual([123]);
    expect(circuitBoard.circuits[0]).toBeInstanceOf(Circuit);
    expect(circuitBoard.circuits[0].operation.name).toBe("start");
    expect(circuitBoard.circuits[0].value).toBe(123);

    expect(circuitBoard.circuits[1].targetCircuit).toBe("ai");
    expect(circuitBoard.circuits[1].operands).toStrictEqual(["af", "ah"]);
    expect(circuitBoard.circuits[1]).toBeInstanceOf(Circuit);
    expect(circuitBoard.circuits[1].operation.name).toBe("and");
    expect(circuitBoard.circuits[1].value).toBeUndefined();

    expect(circuitBoard.circuits[2].targetCircuit).toBe("ll");
    expect(circuitBoard.circuits[2].operands).toStrictEqual(["lk"]);
    expect(circuitBoard.circuits[2]).toBeInstanceOf(Circuit);
    expect(circuitBoard.circuits[2].operation.name).toBe("not");
    expect(circuitBoard.circuits[2].value).toBeUndefined();

    expect(circuitBoard.circuits[3].targetCircuit).toBe("is");
    expect(circuitBoard.circuits[3].operands).toStrictEqual(["hz", 1]);
    expect(circuitBoard.circuits[3]).toBeInstanceOf(Circuit);
    expect(circuitBoard.circuits[3].operation.name).toBe("rshift");
    expect(circuitBoard.circuits[3].value).toBeUndefined();

    expect(circuitBoard.circuits[4].targetCircuit).toBe("ar");
    expect(circuitBoard.circuits[4].operands).toStrictEqual(["an", 15]);
    expect(circuitBoard.circuits[4]).toBeInstanceOf(Circuit);
    expect(circuitBoard.circuits[4].operation.name).toBe("lshift");
    expect(circuitBoard.circuits[4].value).toBeUndefined();

    expect(circuitBoard.circuits[5].targetCircuit).toBe("hi");
    expect(circuitBoard.circuits[5].operands).toStrictEqual(["ht", "hh"]);
    expect(circuitBoard.circuits[5]).toBeInstanceOf(Circuit);
    expect(circuitBoard.circuits[5].operation.name).toBe("or");
    expect(circuitBoard.circuits[5].value).toBeUndefined();
  });
});
