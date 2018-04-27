import createTide from "../tide";
import AppActions from "./app";

describe("AppActions", () => {
  test("load", () => {
    const tide = createTide();
    const actions = new AppActions(tide);

    actions.load();
    expect(tide.get("foobar")).toEqual("baz");
  });
});
