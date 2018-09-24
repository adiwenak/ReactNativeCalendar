import { StyleSheet, ViewStyle } from "react-native"

interface Style {
    bottomOuterView: ViewStyle
}

export default StyleSheet.create<Style>({
    bottomOuterView: {
        flex: 1,
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: "center"
    }
})
