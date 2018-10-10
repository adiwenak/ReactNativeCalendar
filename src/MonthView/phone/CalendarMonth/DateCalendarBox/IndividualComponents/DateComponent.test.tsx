import * as React from "react"
import { create } from "react-test-renderer"
import { DateComponent } from "./DateComponent"

describe("<DateComponent />", () => {

    it("should render with given props when isSelected is true", () => {
        const component = create(
            <DateComponent
                date={"1"}
                isSelected={true}
                dateFontSize={16}
                dateComponentHeight={50}
            />).toJSON()
        expect(component).toMatchSnapshot()
    })
    it("should render with given props when isSelected is false", () => {
        const component = create(
            <DateComponent
                date={"1"}
                isSelected={false}
                dateFontSize={16}
                dateComponentHeight={50}
            />).toJSON()
        expect(component).toMatchSnapshot()
    })
})
