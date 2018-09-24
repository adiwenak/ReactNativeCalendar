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
        flex: 1,
        justifyContent: "center"
    },
    viewContainer: {
        paddingLeft: 4
    },
    textStyleName: {
        color: "#a9a9a9",
        fontWeight: "bold",
        fontSize: 12,
        marginBottom: 1
    },
    textStyleTask: {
        color: "#a9a9a9",
        fontSize: 12,
        marginTop: 1
    }
})
