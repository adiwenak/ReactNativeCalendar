import { StyleSheet, TextStyle, ViewStyle } from "react-native"

interface Style {
    topOuterView: ViewStyle
    selectedColor: ViewStyle
    circleView: ViewStyle
    textStyle: TextStyle
}

export default StyleSheet.create({
    topOuterView: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    selectedColor: {
        backgroundColor: "#FF1493"
    },
    circleView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    textStyle: {
        color: "#a9a9a9",
        fontWeight: "bold",
        fontSize: 16,
    }
})
