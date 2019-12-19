import sut from "./houseRouteMapper";

describe("The houseRouteMapper provides information about Santa's route based on a set of directions.", () => {
  it("should count only unique house deliveries", () => {
    expect(sut(">>").uniqueHouseDeliveries).toBe(3);
    expect(sut("<<").uniqueHouseDeliveries).toBe(3);
    expect(sut("<<>").uniqueHouseDeliveries).toBe(3);
    expect(sut("<<>>").uniqueHouseDeliveries).toBe(3);
    expect(sut("<<v>").uniqueHouseDeliveries).toBe(5);
    expect(sut("<<^>").uniqueHouseDeliveries).toBe(5);
    expect(sut("^>v<").uniqueHouseDeliveries).toBe(4);
    expect(sut("^>v<^>v<").uniqueHouseDeliveries).toBe(4);
    expect(sut("><><").uniqueHouseDeliveries).toBe(2);
  });

  it("should work with multiple santas", () => {
    expect(sut("^v", 2).uniqueHouseDeliveries).toBe(3);
    expect(sut("^>v<", 2).uniqueHouseDeliveries).toBe(3);
    expect(sut("^v^v^v^v^v", 2).uniqueHouseDeliveries).toBe(11);
  });
});
