import Circuit, { operations } from "./Circuit";

let sut;

describe("A Circuit contains the current value of a signal being transmitted and the operation it performs", () => {
  beforeEach(() => {
    sut = new Circuit("a", [123]);
  });
  it("should construct to have the 'start' operation by default", () => {
    expect(typeof sut.operation === "function").toBeTruthy();
    expect(sut.operation.name).toBe("start");
  });

  it("should be able to be overridden by a different operation", () => {
    sut = new Circuit("a", [123], "or");
    expect(typeof sut.operation === "function").toBeTruthy();
    expect(sut.operation.name).toBe("or");
  });

  it("should perform an operation", () => {
    expect(sut.go()).toBe(123);
  });

  it("start should perform an identity operation", () => {
    sut = new Circuit("a", [123], "start");
    expect(sut.go()).toBe(123);

    sut = new Circuit("a", [456], "start");
    expect(sut.go()).toBe(456);
  });

  it("and should perform a bitwise AND operation", () => {
    sut = new Circuit("a", [123, 456], "and");
    expect(sut.go()).toBe(72);
  });

  it("should perform a bitwise OR operation", () => {
    sut = new Circuit("a", [123, 456], "or");
    expect(sut.go()).toBe(507);
  });

  it("should perform a bitwise LShift operation", () => {
    sut = new Circuit("a", [123, 2], "lshift");
    expect(sut.go()).toBe(492);
  });

  it("should perform a bitwise RShift operation", () => {
    sut = new Circuit("a", [456, 2], "rshift");
    expect(sut.go()).toBe(114);
  });

  it("should perform a bitwise NOT operation", () => {
    sut = new Circuit("a", [123], "not");
    expect(sut.go()).toBe(65412);
    sut = new Circuit("a", [456], "not");
    expect(sut.go()).toBe(65079);
  });

  it("should store the value of the last transmitted signal", () => {
    sut = new Circuit("a", [123, 456], "and");
    expect(sut.value).toBeUndefined();
    sut.go();
    expect(sut.value).toBe(72);
  });

  it("should reset circuit with start operation to original value", () => {
    sut.go();
    expect(sut.value).toBe(123);
    sut.reset();
    // Note: Resets to original value for operation type 'start'
    expect(sut.value).toBe(123);
  });

  it("should reset circuits to undefined", () => {
    sut = new Circuit("a", [123], "not");
    sut.go();
    expect(sut.value).toBe(65412);
    sut.reset();
    expect(sut.value).toBeUndefined();
  });

  it("should know the name of the circuit that follows", () => {});
});
