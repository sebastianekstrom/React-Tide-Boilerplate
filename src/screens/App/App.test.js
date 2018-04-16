import React from "react";
import { shallow } from "enzyme";

import App from "./App";

jest.mock("tide/wrap", () => c => c);

describe("<App />", () => {
  it("renders without props", () => {
    const wrapper = shallow(<App />, {
      disableLifecycleMethods: true
    });
    expect(wrapper.length).toEqual(1);
  });
});
