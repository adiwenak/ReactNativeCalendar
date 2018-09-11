import * as React from "react"
import { Component } from "react"

import { Text, TouchableHighlight, View } from "react-native"

interface Props {
    handleChangeMonth: (month: Month) => void
}

interface State {
    currentMonth: Month
    currentIndex: number
}

export class MonthSelection extends Component<Props, State> {
    private allMonths: Month[] = [Month.January, Month.February, Month.March, Month.April, Month.May,
        Month.June, Month.July, Month.August, Month.September, Month.October, Month.November, Month.December]

    handlePreviousButtonPress = () => {
        let { currentIndex } = this.state
        if (currentIndex > 0) {
            currentIndex -= 1
            const currentMonth = this.allMonths[currentIndex]
            this.setState({
                currentIndex,
                currentMonth
            })
        }
    }

    handleNextButtonPress = () => {
        let { currentIndex } = this.state
        if (currentIndex < this.allMonths.length - 1) {
            currentIndex += 1
            const currentMonth = this.allMonths[currentIndex]
            this.setState({
                currentIndex,
                currentMonth
            })
        }
    }

    render() {
        return(
            <View>
                <View>
                    <TouchableHighlight onPress={this.handlePreviousButtonPress}>
                        <text>{"<"}</text>
                    </TouchableHighlight>
                </View>
                <View>
                    <Text>{this.state.currentMonth}</Text>
                </View>
                <View>
                    <TouchableHighlight onPress={this.handleNextButtonPress}>
                        <text>{">"}</text>
                    </TouchableHighlight>
                </View>
            </View >
        )
    }
}
