import { StyleSheet, TextStyle, ViewStyle } from "react-native"

interface Style {
    container: ViewStyle
    containerButton: ViewStyle
    containerTitle: ViewStyle
    title: TextStyle
}

export const styles = StyleSheet.create<Style>({
    container: {
        height: 30,
        flexDirection: "row"
    },
    containerButton: {
        width: 30,
        height: 30
    },
    containerTitle: {
        flex: 1,
        justifyContent: "center"
    },
    title: {
        textAlign: "center"
    }
})
