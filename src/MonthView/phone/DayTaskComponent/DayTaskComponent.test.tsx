import * as React from "react"
import { create } from "react-test-renderer"
import { DayTaskComponent } from "./DayTaskComponent"

describe("<ScrollListTaskComponent />", () => {

    it("should render with given props", () => {
        const component = create(
            <DayTaskComponent
                name={"Adam"}
                task={"Sleep"}
                color={"pink"}
                height={60}
                nameFontSize={16}
                handleOnPress={jest.fn()}
            />).toJSON()
        expect(component).toMatchSnapshot()
    })
})
