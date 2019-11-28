import paperProvider from "./paperProvider";

describe("Determines how many sq feet of wrapping paper are needed for an array of boxes", () => {
  it("should be 7 for 1x1x1 cube", () => {
    expect(paperProvider("1x1x1")).toBe(7);
  });
});
