import { StyleSheet, TextStyle, ViewStyle } from "react-native"

interface Style {
    container: ViewStyle
    containerButton: ViewStyle
    containerButtonLeft: ViewStyle
    containerButtonRight: ViewStyle
    containerTitle: ViewStyle
    title: TextStyle
    button: ViewStyle
}

export const styles = StyleSheet.create<Style>({
    container: {
        flex: 1,
        flexDirection: "row"
    },
    containerButton: {
        width: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    containerButtonLeft: {
        marginLeft: 17
    },
    containerButtonRight: {
        marginRight: 17
    },
    containerTitle: {
        flex: 1,
        justifyContent: "center"
    },
    button: {
        width: 20,
        height: 20
    },
    title: {
        textAlign: "center"
    }
})
