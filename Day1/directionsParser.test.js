import sut from "./directionsParser";

test("parses ()()) to equal -1", () => {
  expect(sut("()())")).toBe(-1);
});
