import { StyleSheet, TextStyle, ViewStyle } from "react-native"

interface Style {
    outerViewContainer: ViewStyle
    textStyle: TextStyle
}

export default StyleSheet.create<Style>({
    outerViewContainer: {
        flex: 1,
    },
    textStyle: {
        textAlign: "center",
        fontSize: 14,
        fontWeight: "bold",
        color: "black",
    }
})
