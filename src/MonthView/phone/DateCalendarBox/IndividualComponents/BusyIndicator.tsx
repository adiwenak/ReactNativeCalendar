import * as React from "react"
import { View } from "react-native"
import styles from "./BusyIndicator.style"

export interface BusyIndicatorObj {
    name: string
    color: string
}

export interface BusyIndicatorProps {
    whosBusy: BusyIndicatorObj[]
    height: number
}

export const BusyIndicator = (props: BusyIndicatorProps): JSX.Element => {
    const circleSize = props.height / 1.7
    const circleBorderRadius = circleSize / 2
    const busyIndicatorPadding = props.height / 3
    return (
        <View style={[
            styles.bottomOuterView,
            {
                height: props.height,
                paddingHorizontal: busyIndicatorPadding
            }
        ]}>
            {props.whosBusy.map((obj: BusyIndicatorObj) =>
                    <View
                        key={obj.color}
                        style={{
                            height: circleSize,
                            width: circleSize,
                            borderRadius: circleBorderRadius,
                            backgroundColor: obj.color
                        }}
                    />
                )
            }
        </View>
    )
}
