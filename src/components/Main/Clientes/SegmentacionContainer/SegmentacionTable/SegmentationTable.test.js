import React from "react";
import { shallow } from "enzyme";
import SegmentationTable from "./SegmentationTable";

describe("SegmentationTable", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SegmentationTable />);
    expect(wrapper).toMatchSnapshot();
  });
});
