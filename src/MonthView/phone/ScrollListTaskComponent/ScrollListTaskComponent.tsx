import * as React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import styles from "./ScrollListTaskComponent.styles"

interface ComponentProps {
    name: string
    task: string
    color: string
    height: number
    nameFontSize: number
    handleOnPress: () => void
}

export const DayTaskComponent = (props: ComponentProps) => {
    return (
        <TouchableOpacity
            onPress={props.handleOnPress}
            style={[
                styles.touchableContainer,
                {
                    height: props.height,
                    backgroundColor: props.color
                }
            ]}
        >
            <View style={styles.viewContainer}>
                <Text style={[styles.textStyleName, {fontSize: props.nameFontSize}]}>
                    {props.name}
                </Text>
                <Text style={[styles.textStyleTask, {fontSize: props.nameFontSize - 2}]}>
                    {props.task}
                </Text>
            </View>
        </TouchableOpacity>
    )
}
