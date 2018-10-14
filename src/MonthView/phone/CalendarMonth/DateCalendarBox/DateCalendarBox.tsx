import * as React from "react"
import { Component } from "react"
import { TouchableOpacity } from "react-native"
import { DateNumber } from "../../../../shared/model"
import styles from "./DateCalendarBox.style"
import { BusyIndicator, BusyIndicatorObj, DateComponent } from "./IndividualComponents"

interface ComponentProps {
    date?: DateNumber
    isSelected: boolean
    isWeekend: boolean
    whosBusy: BusyIndicatorObj[]
    dateBoxOnPressHandler: (date: DateNumber) => void
    boxWidth: number
    dateFontSize: number
}

export class DateCalendarBox extends Component<ComponentProps> {
    private dateComponentHeight = this.props.boxWidth * 0.7
    private busyIndicatorHeight = this.props.boxWidth * 0.3

    public handleOnPress = () => {
        if (this.props.date) {
            this.props.dateBoxOnPressHandler(this.props.date)
        }
    }

    public render() {
        return (
            <TouchableOpacity
                style={[
                    styles.touchableContainer,
                    {height: this.props.boxWidth * 0.8, width: this.props.boxWidth}]}
                onPress={this.handleOnPress}
            >
                <DateComponent
                    date={this.props.date}
                    isWeekend={this.props.isWeekend}
                    isSelected={this.props.isSelected}
                    dateFontSize={this.props.dateFontSize}
                    dateComponentHeight={this.dateComponentHeight}
                />
                <BusyIndicator whosBusy={this.props.whosBusy} height={this.busyIndicatorHeight}/>
            </TouchableOpacity>
        )
    }
}
