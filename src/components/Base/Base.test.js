import React from "react";
import { mount } from "enzyme";

import Base from "./Base";

describe("<Base />", () => {
  it("renders without props", () => {
    const wrapper = mount(<Base />);
    expect(wrapper).toHaveLength(1);
  });

  it("renders the component set by the component prop", () => {
    const wrapper = mount(<Base component="button" />);
    expect(wrapper.find("button")).toHaveLength(1);
  });

  it("renders its children", () => {
    const Child = () => null;
    const wrapper = mount(
      <Base>
        <Child />
      </Base>
    );
    expect(wrapper.find(Child)).toHaveLength(1);
  });

  it("accepts a child function", () => {
    const Child = () => null;
    const wrapper = mount(<Base>{() => <Child />}</Base>);
    expect(wrapper.find(Child)).toHaveLength(1);
  });

  it("forwards componentRef as a ref to the underlying component", () => {
    let component = undefined;
    mount(<Base componentRef={c => (component = c)} component="a" />);
    expect(component).toBeDefined();
  });

  it("only passes props included in the passedProps prop", () => {
    const wrapper = mount(<Base passedProps={["a"]} a="foo" b="bar" />);
    expect(wrapper.find("div").prop("a")).toEqual("foo");
    expect(wrapper.find("div").prop("b")).toBeUndefined();
  });
});
