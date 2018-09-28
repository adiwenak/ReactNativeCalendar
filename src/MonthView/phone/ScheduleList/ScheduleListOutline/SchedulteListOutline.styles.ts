import { StyleSheet, TextStyle, ViewStyle } from "react-native"

interface Style {
    outerViewContainer: ViewStyle
    headerViewContainer: ViewStyle
    textViewContainer: ViewStyle
    emptyViewContainer: ViewStyle
    borderStyle: ViewStyle
    borderLeft: ViewStyle
    borderCircle: ViewStyle
    textStyle: TextStyle
}

export default StyleSheet.create<Style>({
    headerViewContainer: {
        flex: 1,
        height: 50
    },
    emptyViewContainer: {
        flex: 1
    },
    textViewContainer: {
        flex: 4
    },
    outerViewContainer: {
        flex: 4
    },
    borderStyle: {
        borderStyle: "solid",
        borderBottomWidth: 1,
        borderBottomColor: "#d3d3d3"
    },
    borderLeft: {
        borderStyle: "solid",
        borderLeftWidth: 1,
        borderLeftColor: "#d3d3d3"
    },
    borderCircle: {
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#d3d3d3",
        borderStyle: "solid",
        position: "absolute"
    },
    textStyle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "black"
    }
})
