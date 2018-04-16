import React from "react";
import { mount } from "enzyme";
import Text from "./Text";

describe("<Text />", () => {
  it("renders without props", () => {
    const wrapper = mount(<Text />);
    expect(wrapper).toHaveLength(1);
  });
});
