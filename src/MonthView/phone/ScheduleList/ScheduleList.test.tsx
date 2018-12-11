import * as React from "react"
import { create } from "react-test-renderer"
import { ScheduleList } from "./ScheduleList"

describe("<Timeline />", () => {
    it("should render with given props", () => {
        const component = create(
            <ScheduleList
                startTime={"0800"}
                endTime={"1800"}
                height={50}
            />).toJSON()
        expect(component).toMatchSnapshot()
    })
})
