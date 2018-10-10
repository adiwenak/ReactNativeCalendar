import * as React from "react"
import { create } from "react-test-renderer"
import { BusyIndicator } from "./BusyIndicator"

describe("<BusyIndicator />", () => {
    const weBusy = [
        {name: "Adam", color: "blue"},
        {name: "Adi", color: "green"},
        {name: "Bruno", color: "red"},
        {name: "George", color: "pink"},
        {name: "Chiro", color: "black"},
        {name: "Olivia", color: "grey"}
    ]
    it("should render with given props", () => {
        const component = create(
            <BusyIndicator
                whosBusy={weBusy}
                height={10}
            />).toJSON()
        expect(component).toMatchSnapshot()
    })
})
