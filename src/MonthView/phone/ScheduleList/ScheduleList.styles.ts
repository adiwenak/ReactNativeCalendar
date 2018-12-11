import { StyleSheet, TextStyle, ViewStyle } from "react-native"

interface Style {
    scrollView: ViewStyle
    textStyle: TextStyle
    leftEventHeader: ViewStyle
    rightEventHeader: ViewStyle
    outerViewContainer: ViewStyle
}

export default StyleSheet.create<Style>({
    scrollView: {
        flexDirection: "column"
    },
    textStyle: {
        paddingLeft: 10,
        fontSize: 14,
        fontWeight: "bold",
        color: "black"
    },
    leftEventHeader: {
        flex: 1
    },
    rightEventHeader: {
        flex: 4,
    },
    outerViewContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center"
    }
})
