import { StyleSheet } from "react-native"

export default StyleSheet.create({
    touchableContainer: {
        flexDirection: "column",
        borderWidth: 1,
        borderColor: "#000000",
        justifyContent: "space-between",
    },
    topOuterView: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    bottomOuterView: {
        flex: 1,
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: "center"
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
