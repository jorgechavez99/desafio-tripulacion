import React from "react";
import { shallow } from "enzyme";
import SegmentacionContainer from "./SegmentacionContainer";

describe("SegmentacionContainer", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SegmentacionContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
