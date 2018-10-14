import { shallow } from "enzyme"
import * as React from "react"
import { create } from "react-test-renderer"
import { DateCalendarBox } from "./DateCalendarBox"

describe("<DateCalendarBox />", () => {
    const weBusy = [
        {name: "Adam", color: "blue"},
        {name: "Adi", color: "green"},
        {name: "Bruno", color: "red"},
        {name: "George", color: "pink"},
        {name: "Chiro", color: "black"},
        {name: "Olivia", color: "grey"}
    ]
    const onPressHandlerMock = jest.fn()

    it("should render with given props", () => {
        const component = create(
            <DateCalendarBox
                date={1}
                isSelected={true}
                isWeekend={false}
                whosBusy={weBusy}
                dateBoxOnPressHandler={onPressHandlerMock}
                boxWidth={50}
                dateFontSize={16}
            />).toJSON()
        expect(component).toMatchSnapshot()
    })

    it("should call onPressHandler when component is pressed", () => {

        const component = shallow(
            <DateCalendarBox
                date={1}
                isSelected={true}
                isWeekend={false}
                whosBusy={weBusy}
                dateBoxOnPressHandler={onPressHandlerMock}
                boxWidth={50}
                dateFontSize={16}
            />
        )

        component.props().onPress()
        expect(onPressHandlerMock.mock.calls.length).toBe(1)
    })
})
