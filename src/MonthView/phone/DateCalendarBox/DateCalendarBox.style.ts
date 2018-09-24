import { StyleSheet, ViewStyle } from "react-native"

interface Style {
    touchableContainer: ViewStyle
}

export default StyleSheet.create<Style>({
    touchableContainer: {
        flexDirection: "column",
        borderWidth: 1,
        borderColor: "#000000",
        justifyContent: "space-between",
    }
})
