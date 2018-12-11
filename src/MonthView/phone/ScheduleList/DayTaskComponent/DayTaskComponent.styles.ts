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
        color: "white",
        fontWeight: "bold",
        marginBottom: 1
    },
    textStyleTask: {
        color: "white",
        marginTop: 1
    }
})
