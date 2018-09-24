import { StyleSheet, TextStyle, ViewStyle } from "react-native"

interface Style {
    touchableContainer: ViewStyle
    viewContainer: ViewStyle
    textStyleName: TextStyle
    textStyleTask: TextStyle
}

export default StyleSheet.create<Style>({
    touchableContainer: {
        flexDirection: "column",
        justifyContent: "center"
    },
    viewContainer: {
        paddingLeft: 4
    },
    textStyleName: {
        color: "#a9a9a9",
        fontWeight: "bold",
        fontSize: 12,
    },
    textStyleTask: {
        color: "#a9a9a9",
        fontSize: 12,
    }
})
