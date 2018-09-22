import * as React from "react"
import { Text, View } from "react-native"
import styles from "./DateComponent.style"

interface DateComponentProps {
    day: string
    isSelected: boolean
    dateFontSize: number
    dateComponentHeight: number
}

export const DateComponent = (props: DateComponentProps) => {
    const circleSize = props.dateComponentHeight / 1.2
    const borderRadiusSize = circleSize / 2
    return (
        <View style={[styles.topOuterView, {height: props.dateComponentHeight}]}>
            {props.isSelected ? (
                <View style={[
                    styles.selectedColor,
                    {height: circleSize, width: circleSize, borderRadius: borderRadiusSize}
                ]}>
                    <View style={styles.circleView}>
                        <Text style={[styles.textStyle, {fontSize: props.dateFontSize}]}>
                            {props.day}
                        </Text>
                    </View>
                </View>
                ) : (
                <Text style={[styles.textStyle, {fontSize: props.dateFontSize}]}>
                    {props.day}
                </Text>
            )}
        </View>
    )
}
