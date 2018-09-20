import * as React from "react"
import { View } from "react-native"
import styles from "../DayCalendarBox.style"

export interface Indicator {
    name: string
    color: string
}

export interface BusyIndicatorProps {
    whosBusy: Indicator[]
    busyIndicatorHeight: number
}

export const BusyIndicator = (props: BusyIndicatorProps): JSX.Element => {
    const circleSize = props.busyIndicatorHeight / 1.7
    const circleBorderRadius = circleSize / 2
    const busyIndicatorPadding = props.busyIndicatorHeight / 3
    return (
        <View style={[
            styles.bottomOuterView,
            {
                height: props.busyIndicatorHeight,
                paddingHorizontal: busyIndicatorPadding
            }
        ]}>
            {props.whosBusy ? props.whosBusy.map((obj: Indicator) =>
                    <View
                        key={obj.color}
                        style={{
                            height: circleSize,
                            width: circleSize,
                            borderRadius: circleBorderRadius,
                            backgroundColor: obj.color
                        }}
                    />
                ) : null
            }
        </View>
    )
}
