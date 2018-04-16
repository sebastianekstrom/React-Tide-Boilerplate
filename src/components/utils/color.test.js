import color from "./color";

describe("Color utils", () => {
  it("returns the correct colors", () => {
    expect(color(["black"])).toEqual("#282E34");
    expect(color(["undefinedColor"])).toEqual(undefined);
  });
});
