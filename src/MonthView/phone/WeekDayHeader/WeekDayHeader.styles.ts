import { StyleSheet, TextStyle, ViewStyle } from "react-native"

interface Style {
    outerViewContainer: ViewStyle
    textStyle: TextStyle
}

export default StyleSheet.create<Style>({
    outerViewContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 5,
        paddingLeft: 25,
        paddingRight: 25
    },
    textStyle: {
        fontSize: 16,
        color: "black",
        fontWeight: "bold",
    }
})
