import React from "react";
import { shallow } from "enzyme";
import Cafe from "./Cafe";

describe("Cafe", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Cafe />);
    expect(wrapper).toMatchSnapshot();
  });
});
