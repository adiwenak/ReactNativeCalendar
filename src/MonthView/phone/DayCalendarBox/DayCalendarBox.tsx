import * as React from "react"
import { Component } from "react"
import { ActivityIndicator, Dimensions, ImageBackground, Text, TouchableOpacity, View } from "react-native"
import styles from "./DayCalendarBox.style"

import { BusyIndicator, BusyIndicatorProps, DateComponent, Indicator } from "./IndividualComponents"

interface ComponentProps {
    day: string
    isSelected: boolean
    whosBusy: Indicator[]
    dayBoxOnPressHandler: (hello: string) => void
    boxHeight: number
    dateFontSize: number
}

export class DayCalendarBox extends Component<ComponentProps> {
    private dateComponentHeight = this.props.boxHeight * 0.7
    private busyIndicatorHeight = this.props.boxHeight * 0.3

    handleOnPress = () => {
        this.props.dayBoxOnPressHandler(this.props.day)
    }

    public render() {
        return (
            <TouchableOpacity
                style={[styles.touchableContainer, {height: this.props.boxHeight, width: this.props.boxHeight}]}
                onPress={this.handleOnPress}
            >
                <DateComponent
                    day={this.props.day}
                    isSelected={this.props.isSelected}
                    dateFontSize={this.props.dateFontSize}
                    dateComponentHeight={this.dateComponentHeight}
                />
                <BusyIndicator whosBusy={this.props.whosBusy} busyIndicatorHeight={this.busyIndicatorHeight}/>
            </TouchableOpacity>
        )
    }
}
