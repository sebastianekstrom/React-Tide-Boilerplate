import React from "react";
import { mount } from "enzyme";
import Box from "./Box";

describe("<Box />", () => {
  it("renders without props", () => {
    const wrapper = mount(<Box />);
    expect(wrapper).toHaveLength(1);
  });
});
