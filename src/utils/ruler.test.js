import { getSmallestPerimeter, getVolume } from "./ruler";

describe("Measures various dimensions of a box or list of boxes", () => {
  it("should get the smallest perimeter of a box", () => {
    expect(getSmallestPerimeter({ h: 1, w: 1, d: 1 })).toBe(4);
    expect(getSmallestPerimeter({ h: 1, w: 1, d: 2 })).toBe(4);
    expect(getSmallestPerimeter({ h: 1, w: 2, d: 2 })).toBe(6);
    expect(getSmallestPerimeter({ h: 1, w: 2, d: 3 })).toBe(6);
    expect(getSmallestPerimeter({ h: 7, w: 2, d: 5 })).toBe(14);
  });

  it("should get the volume of a box", () => {
    expect(getVolume({ h: 1, w: 1, d: 1 })).toBe(1);
    expect(getVolume({ h: 2, w: 2, d: 2 })).toBe(8);
  });
});
