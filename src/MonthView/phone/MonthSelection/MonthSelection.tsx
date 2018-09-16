import { Moment } from "moment"
import moment from "moment"
import * as React from "react"
import { Component } from "react"
import { Image, Text, TouchableHighlight, View } from "react-native"
import { Month } from "../../../shared/model"
import { styles } from "./MonthSelection.styles"

enum MonthAsString {
    January = "January",
    February = "February",
    March = "March",
    April = "April",
    May = "May",
    June = "June",
    July = "July",
    August = "August",
    September = "September",
    October = "October",
    November = "November",
    December = "December"
}

interface Props {
    onMonthChange?: (month: Month, year: number) => void
    currentYear?: number
}

interface State {
    currentMonth: Month
    currentYear: number
}

export class MonthSelection extends Component<Props, State> {
    private allMonths: MonthAsString[] = [MonthAsString.January, MonthAsString.February,
        MonthAsString.March, MonthAsString.April, MonthAsString.May,
        MonthAsString.June, MonthAsString.July, MonthAsString.August,
        MonthAsString.September, MonthAsString.October, MonthAsString.November, MonthAsString.December]

    constructor(props: Props) {
        super(props)
        this.state = {
            currentMonth: Month.January,
            currentYear: props.currentYear || moment().year()
        }
    }

    onMonthChange = (month: Month, year: number) => {
        if (this.props.onMonthChange) {
            this.props.onMonthChange(month, year)
        }
    }

    handlePreviousButtonPress = () => {
        let { currentMonth, currentYear } = this.state
        if (currentMonth > 0) {
            currentMonth -= 1
        } else {
            currentYear -= 1
            currentMonth = Month.December
        }

        this.setState({
            currentMonth,
            currentYear
        })

        this.onMonthChange(currentMonth, currentYear)
    }

    handleNextButtonPress = () => {
        let { currentMonth, currentYear } = this.state
        if (currentMonth < this.allMonths.length - 1) {
            currentMonth += 1
        } else {
            currentYear += 1
            currentMonth = Month.January
        }

        this.setState({
            currentMonth,
            currentYear
        })

        this.onMonthChange(currentMonth, currentYear)
    }

    render() {
        const title = `${this.allMonths[this.state.currentMonth]} ${this.state.currentYear}`
        return(
            <View style={styles.container}>
                <TouchableHighlight
                    onPress={this.handlePreviousButtonPress}
                    style={styles.containerButton}
                >
                    <Image source={require("./asset/arrow-back.png")} resizeMode={"center"}/>
                </TouchableHighlight>
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <TouchableHighlight
                    onPress={this.handleNextButtonPress}
                    style={styles.containerButton}>
                    <Image source={require("./asset/arrow-forward.png")} resizeMode={"center"}/>
                </TouchableHighlight>
            </View >
        )
    }
}
