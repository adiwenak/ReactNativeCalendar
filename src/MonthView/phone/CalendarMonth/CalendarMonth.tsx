import * as React from "react"
import { LayoutChangeEvent, View } from "react-native"
import { MonthSelection } from "../MonthSelection/MonthSelection"
import { styles } from "./CalendarMonth.styles"
import { DateCalendarBox } from "./DateCalendarBox"

interface CalendarMonthProps {}

interface CalendarMonthState {
    dateBoxWidth: number
}

const getDaysArray = (year: number, month: number) => {
    const date = new Date(year, month - 1, 1)
    const result: any = {}
    let startDayOfTheMonth = date.getDay() - 1
    while (date.getMonth() === month - 1) {
        result[startDayOfTheMonth] = date.getDate()
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
            dateBoxWidth: 0
        }
    }

    genrateBoxes() {
        const all = getDaysArray(2018, 11)
        let n = 0
        const els = []
        while (n < this.boxes) {
            let dateString = ""
            if (all[n]) {
                dateString = all[n]
            }
            const el = (
                <DateCalendarBox
                    date={dateString}
                    boxHeight={this.state.dateBoxWidth}
                    dateFontSize={12}
                    isSelected={false}
                    whosBusy={[]}
                    dateBoxOnPressHandler={(date: string) => {// asd
                     }}
                    />
            )
            els.push(el)
            n += 1
        }

        return els
    }

    containerOnLayout = (event: LayoutChangeEvent) => {
        const dateBoxWidth = event.nativeEvent.layout.width / 7.1
        this.setState({dateBoxWidth})
    }

    public render(): JSX.Element {
        const n = 0
        const boxes = this.genrateBoxes()
        return (
            <View style={styles.container}>
                <View style={styles.containerMonthSelection}>
                    <MonthSelection />
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
}
