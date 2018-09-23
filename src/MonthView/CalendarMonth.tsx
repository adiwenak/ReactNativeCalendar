import * as React from "react"
import { Component } from "react"
import { View } from "react-native"
import { DateCalendarBox } from "./phone/DateCalendarBox"

interface ComponentProps {}

interface ComponentState {
    dateSelected: string
}

const weBusy = [
    {name: "Adam", color: "blue"},
    {name: "Adi", color: "green"},
    {name: "Bruno", color: "red"},
    {name: "George", color: "pink"},
    {name: "Chiro", color: "black"},
    {name: "Olivia", color: "grey"}
]

export class CalendarMonth extends Component<ComponentProps, ComponentState> {

    constructor(props: ComponentProps) {
        super(props)
        this.state = {
            dateSelected: "",
        }
    }

    public dateBoxOnPressHandler = (date: string) => {
        this.setState({ dateSelected: date })
    }

    public render() {
        return (
            <View>
                <DateCalendarBox
                    date={"31"}
                    isSelected={true}
                    whosBusy={weBusy}
                    dateBoxOnPressHandler={this.dateBoxOnPressHandler}
                    boxHeight={40}
                    dateFontSize={13}
                />
            </View>
        )
    }
}
