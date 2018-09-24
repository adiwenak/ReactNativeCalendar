import * as React from "react"
import { create } from "react-test-renderer"
import { ScrollListTaskComponent } from "./ScrollListTaskComponent"

describe("<ScrollListTaskComponent />", () => {

    it("should render with given props", () => {
        const component = create(
            <ScrollListTaskComponent
                name={"Adam"}
                task={"Sleep"}
                color={"pink"}
                height={60}
                width={60}
                handleOnPress={jest.fn()}
            />).toJSON()
        expect(component).toMatchSnapshot()
    })
})
