import * as React from "react"
import { Component } from "react"
import { TouchableOpacity } from "react-native"
import styles from "./DateCalendarBox.style"

import { BusyIndicator, BusyIndicatorObj, DateComponent } from "./IndividualComponents"

interface ComponentProps {
    date: string
    isSelected: boolean
    whosBusy: BusyIndicatorObj[]
    dateBoxOnPressHandler: (date: string) => void
    boxHeight: number
    dateFontSize: number
}

export class DateCalendarBox extends Component<ComponentProps> {
    private dateComponentHeight = this.props.boxHeight * 0.7
    private busyIndicatorHeight = this.props.boxHeight * 0.3

    public handleOnPress = () => {
        this.props.dateBoxOnPressHandler(this.props.date)
    }

    public render() {
        return (
            <TouchableOpacity
                style={[styles.touchableContainer, {height: this.props.boxHeight, width: this.props.boxHeight}]}
                onPress={this.handleOnPress}
            >
                <DateComponent
                    date={this.props.date}
                    isSelected={this.props.isSelected}
                    dateFontSize={this.props.dateFontSize}
                    dateComponentHeight={this.dateComponentHeight}
                />
                <BusyIndicator whosBusy={this.props.whosBusy} height={this.busyIndicatorHeight}/>
            </TouchableOpacity>
        )
    }
}
