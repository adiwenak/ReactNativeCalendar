import * as React from "react"
import { create } from "react-test-renderer"
import { individualHourlyBox, ScheduleListOutline } from "./ScheduleListOutline"

describe("<Timeline />", () => {
    it("should render with given props", () => {
        const component = create(
            <ScheduleListOutline
                height={50}
                numberToRender={10}
            />).toJSON()
        expect(component).toMatchSnapshot()
    })
    it("should trigger individualHourlyBox function to render jsx", () => {
        const component = individualHourlyBox(50, 10)
        expect(component.length).toBe(10)

        const component2 = individualHourlyBox()
        expect(component2.length).toBe(0)
    })
})
