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
        marginTop: 20,
        backgroundColor: "azure"
    },
    userSelectionContainer: {
        marginBottom: 20
    },
    calendarMonthContainer: {
        marginBottom: 20
    },
    dayScheduleContainer: {
        flex: 1
    },
})
