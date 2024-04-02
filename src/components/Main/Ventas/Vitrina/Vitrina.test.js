import React from "react";
import { shallow } from "enzyme";
import Vitrina from "./Vitrina";

describe("Vitrina", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Vitrina />);
    expect(wrapper).toMatchSnapshot();
  });
});
