import { StyleSheet, ViewStyle } from "react-native"

interface Styles {
    container: ViewStyle
    userSelectionContainer: ViewStyle
    calendarMonthContainer: ViewStyle
    dayScheduleContainer: ViewStyle
}

export const styles = StyleSheet.create<Styles>({
    container: {
        flex: 1,
        backgroundColor: "azure"
    },
    userSelectionContainer: {
        height: 50,
        marginBottom: 20
    },
    calendarMonthContainer: {
        height: 150,
        marginBottom: 20
    },
    dayScheduleContainer: {
        flex: 1
    },
})
