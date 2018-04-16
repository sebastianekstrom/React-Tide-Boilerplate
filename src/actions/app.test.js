import createTide from "../tide";
import AppActions from "./app";

describe("AppActions", () => {
  let tide;
  let actions;

  beforeEach(() => {
    tide = createTide();
    actions = new AppActions(tide);
  });

  test("load", () => {
    const tide = createTide();
    const actions = new AppActions(tide);

    actions.load();
    expect(tide.get("foobar")).toEqual("baz");
  });
});
