import { StyleSheet, ViewStyle } from "react-native"

interface Style {
    container: ViewStyle
    containerMonthSelection: ViewStyle
    containerDates: ViewStyle
}

export const styles = StyleSheet.create<Style>({
    container: {
        flexDirection: "column",
        flex: 1
    },
    containerMonthSelection: {
        height: 50
    },
    containerDates: {
        flexDirection: "row",
        flexWrap: "wrap"
    }
})
