import { StyleSheet, TextStyle, ViewStyle } from "react-native"

interface Style {
    backgroundMidle: ViewStyle
    textAlightCenter: TextStyle
    buttonUser: TextStyle
    alightViewWithPadings: ViewStyle
}

export const styles = StyleSheet.create<Style>({
    backgroundMidle: {
        justifyContent: 'center', 
        alignItems: 'center',
        margin:1
    },

    textAlightCenter: {
        textAlign:"center", 
        margin: 8,
    },

    buttonUser: {
        textAlign:"center", 
        color: 'white',
    },

    alightViewWithPadings: {
        flex: 1, 
        flexDirection: 'row', 
        justifyContent:"center", 
        marginHorizontal: 10, 
        marginTop:10
    }
})
