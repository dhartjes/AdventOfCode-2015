import boxParser, { getSmallestPerimeter, getVolume } from "./boxParser";

describe("boxParser takes input and converts to box objects with depth, height and width", () => {
  it("should parse list of box dimensions string into correct number of boxes", () => {
    expect(boxParser("1x1x1").length).toBe(1);
    expect(
      boxParser(
        `1x1x1
			2x2x2`
      ).length
    ).toBe(2);
    expect(
      boxParser(
        `1x1x1
			2x2x2
			3x3x3`
      ).length
    ).toBe(3);
  });

  it("should parse box dimensions into object with proper values", () => {
    expect(boxParser("2x2x2")).toStrictEqual([{ d: 2, h: 2, w: 2 }]);
  });

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
});
