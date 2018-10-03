import * as React from "react"
import { View } from "react-native"
import { styles } from "./PhoneMonthView.styles"

interface PhoneMonthViewProps {

}

interface PhoneMonthViewState {

}

export class PhoneMonthView extends React.Component<PhoneMonthViewProps, PhoneMonthViewState> {
    public render(): JSX.Element {
        return (
            <View style={styles.container}>
                <View style={styles.userSelectionContainer}>
                </View>
                <View style={styles.calendarMonthContainer}>
                </View>
                <View style={styles.dayScheduleContainer}>
                </View>
            </View>
        )
    }
}
