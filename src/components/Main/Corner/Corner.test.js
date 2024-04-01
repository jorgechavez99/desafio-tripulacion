import React from "react";
import { shallow } from "enzyme";
import Corner from "./Corner";

describe("Corner", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Corner />);
    expect(wrapper).toMatchSnapshot();
  });
});