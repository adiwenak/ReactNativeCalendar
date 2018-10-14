import moment from "moment"
import * as React from "react"
import { LayoutChangeEvent, View } from "react-native"
import { DateNumber, Month } from "../../../shared/model"
import { styles } from "./CalendarMonth.styles"
import { DateCalendarBox } from "./DateCalendarBox"
import { MonthSelection } from "./MonthSelection"
import { WeekDayHeader } from "./WeekDayHeader"

interface CalendarMonthProps {}

interface CalendarMonthState {
    dateBoxWidth: number,
    currentMonth: Month,
    currentYear: number
}

interface NBoxToDateNumber {
    [key: number]: DateObject
}

interface DateObject {
    dateNumber: DateNumber
    isWeekend: boolean
}

const nBoxToDateMapper = (year: number, month: number): NBoxToDateNumber => {
    const date = new Date(year, month, 1)
    const result: NBoxToDateNumber = {}
    let startDayOfTheMonth = date.getDay()
    while (date.getMonth() === month) {
        const currentDay = date.getDay()
        let isWeekend = false
        if (currentDay === 0 || currentDay === 6) {
            isWeekend = true
        }
        result[startDayOfTheMonth] = {
            dateNumber: date.getDate() as DateNumber,
            isWeekend
        }
        startDayOfTheMonth += 1
        date.setDate(date.getDate() + 1)
    }
    return result
  }

export class CalendarMonth extends React.Component<CalendarMonthProps, CalendarMonthState> {

    private boxes = 35
    constructor(props: CalendarMonthProps) {
        super(props)
        this.state = {
            dateBoxWidth: 0,
            currentMonth: Month.January,
            currentYear: moment().year()
        }
    }

    generateBoxes() {
        const all = nBoxToDateMapper(this.state.currentYear, this.state.currentMonth)
        let n = 0
        const els = []
        while (n < this.boxes) {
            const obj = all[n]
            let el
            if (obj) {
                el = (
                    <DateCalendarBox
                        key={`date-${n}`}
                        date={obj.dateNumber}
                        boxWidth={this.state.dateBoxWidth}
                        dateFontSize={13}
                        isSelected={false}
                        isWeekend={obj.isWeekend}
                        whosBusy={[]}
                        dateBoxOnPressHandler={this.onDatePress}
                        />
                )
            } else {
                el = (
                    <DateCalendarBox
                        key={`date-${n}`}
                        boxWidth={this.state.dateBoxWidth}
                        dateFontSize={12}
                        isSelected={false}
                        isWeekend={false}
                        whosBusy={[]}
                        dateBoxOnPressHandler={this.onDatePress}
                        />
                )
            }
            els.push(el)
            n += 1
        }

        return els
    }

    containerOnLayout = (event: LayoutChangeEvent) => {
        const dateBoxWidth = event.nativeEvent.layout.width / 7.01
        this.setState({dateBoxWidth})
    }

    public render(): JSX.Element {
        const n = 0
        const boxes = this.generateBoxes()
        return (
            <View style={styles.container}>
                <View style={styles.containerMonthSelection}>
                    <MonthSelection
                        onMonthChange={this.onMonthChange}
                    />
                </View>
                <View style={styles.containerWeekday}>
                    <WeekDayHeader />
                </View>
                <View
                    onLayout={this.containerOnLayout}
                    style={styles.containerDates}>
                    {
                        boxes.map((value) => {
                            return value
                        })
                    }
                </View >
            </View>

        )
    }

    private onMonthChange = (month: Month, year: number) => {
        this.setState({
            currentMonth: month,
            currentYear: year
        })
    }

    private onDatePress = (date: DateNumber) => {
        //
    }
}
