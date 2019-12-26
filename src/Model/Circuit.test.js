import Circuit, { operations } from "./Circuit";

let sut;

describe("A Circuit contains the current value of a signal being transmitted and the operation it performs", () => {
  beforeEach(() => {
    sut = new Circuit();
  });
  it("should construct to have the 'start' operation by default", () => {
    expect(typeof sut.operation === "function").toBeTruthy();
    expect(sut.operation.name).toBe("start");
  });

  it("should be able to be overridden by a different operation", () => {
    sut = new Circuit("or");
    expect(typeof sut.operation === "function").toBeTruthy();
    expect(sut.operation.name).toBe("or");
  });

  it("should perform an operation", () => {
    expect(sut.go(14)()).toBe(14);
  });

  it("start should perform an identity operation", () => {
    sut = new Circuit("start");
    expect(sut.go(123)()).toBe(123);

    sut = new Circuit("start");
    expect(sut.go(456)()).toBe(456);
  });

  it("and should perform a bitwise AND operation", () => {
    sut = new Circuit("and");
    expect(sut.go(123, 456)()).toBe(72);
  });

  it("should perform a bitwise OR operation", () => {
    sut = new Circuit("or");
    expect(sut.go(123, 456)()).toBe(507);
  });

  it("should perform a bitwise LShift operation", () => {
    sut = new Circuit("lshift");
    expect(sut.go(123, 2)()).toBe(492);
  });

  it("should perform a bitwise RShift operation", () => {
    sut = new Circuit("rshift");
    expect(sut.go(456, 2)()).toBe(114);
  });

  it("should perform a bitwise NOT operation", () => {
    sut = new Circuit("not");
    expect(sut.go(123)()).toBe(65412);
    expect(sut.go(456)()).toBe(65079);
  });

  it("should store the value of the last transmitted signal", () => {});

  it("should be resettable to forget the value of the last transmitted signal", () => {});
});
