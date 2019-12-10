import paperProvider from "./paperProvider";

describe("Determines how many sq feet of wrapping paper are needed for an array of boxes", () => {
  it("should be 8 for 1x1x1 cube", () => {
    expect(paperProvider("1x1x1")).toBe(8);
  });

  it("should be 12 for a 2x1x1 cube", () => {
    expect(paperProvider("2x1x1")).toBe(12);
  });

  it("should be 20 for a 2x2x1 cube", () => {
    expect(paperProvider("2x2x1")).toBe(20);
  });

  it("should be 40 for cubes [2x1x1,1x1x1,2x2x1]", () => {
    let input = `2x1x1
		1x1x1
		2x2x1`;
    expect(paperProvider(input)).toBe(40);
  });

  it("should be big for a 111x222x333 cube", () => {
    let input = "1111x222x3333";
    expect(paperProvider(input)).toBe(40);
  });
});
