import { shallow } from "enzyme"
import * as React from "react"
import { TouchableOpacity } from "react-native"
import { create } from "react-test-renderer"
import { DayCalendarBox } from "./DayCalendarBox"

describe("<DayCalendarBox />", () => {
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
            <DayCalendarBox
                day={"1"}
                isSelected={true}
                whosBusy={weBusy}
                dayBoxOnPressHandler={onPressHandlerMock}
                boxHeight={50}
                dateFontSize={16}
            />).toJSON()
        expect(component).toMatchSnapshot()
    })

    it("should call onPressHandler when component is pressed", () => {

        const component = shallow(
            <DayCalendarBox
                day={"1"}
                isSelected={true}
                whosBusy={weBusy}
                dayBoxOnPressHandler={onPressHandlerMock}
                boxHeight={50}
                dateFontSize={16}
            />
        )

        component.props().onPress()
        expect(onPressHandlerMock.mock.calls.length).toBe(1)
    })
})
