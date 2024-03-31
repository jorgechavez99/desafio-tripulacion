import React from "react";
import { shallow } from "enzyme";
import SegmentacionBarChart from "./SegmentacionBarChart";

describe("SegmentacionBarChart", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SegmentacionBarChart />);
    expect(wrapper).toMatchSnapshot();
  });
});
