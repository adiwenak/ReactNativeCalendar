import * as React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import styles from "./ScrollListTaskComponent.styles"

interface ComponentProps {
    name: string
    task: string
    color: string
    height: number
    handleOnPress: () => void
}

export const ScrollListTaskComponent = (props: ComponentProps) => {
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
                <Text style={styles.textStyleName}>
                    {props.name}
                </Text>
                <Text style={styles.textStyleTask}>
                    {props.task}
                </Text>
            </View>
        </TouchableOpacity>
    )
}
