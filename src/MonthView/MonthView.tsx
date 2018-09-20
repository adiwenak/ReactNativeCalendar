import * as React from "react"
import { Component } from "react"
import { View } from "react-native"
import { DayCalendarBox } from "./phone/DayCalendarBox"

interface ComponentProps {}

const weBusy = [
    {name: "Adam", color: "blue"},
    {name: "Adi", color: "green"},
    {name: "Bruno", color: "red"},
    {name: "George", color: "pink"},
    {name: "Chiro", color: "black"},
    {name: "Olivia", color: "grey"}
]

export class MonthView extends Component<ComponentProps, any> {

    constructor(props: ComponentProps) {
        super(props)
        this.state = {
            dateSelected: "",
        }
    }

    public dayBoxOnPressHandler = (day: string) => {
        this.setState({ dateSelected: day })
    }

    public render() {
        return (
            <View>
                <DayCalendarBox
                    day={"31"}
                    isSelected={true}
                    whosBusy={weBusy}
                    dayBoxOnPressHandler={this.dayBoxOnPressHandler}
                    boxHeight={40}
                    dateFontSize={13}
                />
            </View>
        )
    }
}
