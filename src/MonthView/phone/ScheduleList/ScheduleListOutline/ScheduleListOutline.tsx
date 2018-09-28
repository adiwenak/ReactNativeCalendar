import * as React from "react"
import { Text, View } from "react-native"
import styles from "./SchedulteListOutline.styles"

interface Props {
    height: number
    numberToRender: number
}

export const individualHourlyBox = (height: number = 0, numberToRender: number = 0) => {
    const calcHeight = height / 5
    const halfCalcHeight = height / 10
    const rows = []
    for (let i = 0; i < numberToRender; i++) {
        rows.push(
            <View key={i} style={[styles.borderLeft, styles.borderStyle, {height}]}>
                <View style={[
                    styles.borderCircle,
                    {
                        height: calcHeight,
                        width: calcHeight,
                        borderRadius: halfCalcHeight,
                        top: -halfCalcHeight,
                        left: -halfCalcHeight
                    }
                ]}/>
            </View>
        )
    }
    return rows
}

export const ScheduleListOutline = ({height, numberToRender}: Props) => {
    const halfOfHeight = height / 2
    const calcHeight = height / 5
    const halfCalcHeight = height / 10
    return (
        <View style={styles.outerViewContainer}>
            <View style={[styles.borderLeft, styles.borderStyle, {height: halfOfHeight}]}/>
                {individualHourlyBox(height, numberToRender)}
            <View style={[styles.borderLeft, {height: halfOfHeight}]}>
                <View style={[
                    styles.borderCircle,
                    {
                        height: calcHeight,
                        width: calcHeight,
                        borderRadius: halfCalcHeight,
                        top: -halfCalcHeight,
                        left: -halfCalcHeight
                    }
                ]}/>
            </View>
        </View>
    )
}
