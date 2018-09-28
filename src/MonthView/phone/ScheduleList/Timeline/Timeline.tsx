import * as React from "react"
import { Text, View } from "react-native"
import { fullTimeArray, fullTimeArrayRender } from "./Timeline.constants"
import styles from "./Timeline.styles"

type TimeType = "0000" | "0100" | "0200" | "0300" | "0400" | "0500" | "0600" | "0700" | "0800" | "0900" | "1000" |
                "1100" | "1200" | "1300" | "1400" | "1500" | "1600" | "1700" | "1800" | "1900" | "2000" | "2100" |
                "2200" | "2300" | "2400"

interface TimelineProps {
    startTime: TimeType
    endTime: TimeType
    height: number
}

export const Timeline = ({startTime, endTime, height}: TimelineProps) => {
    const indexOfStartTime = fullTimeArray.indexOf(startTime)
    const indexOfEndTime = fullTimeArray.indexOf(endTime)
    const keepTimeArray = fullTimeArrayRender.slice(indexOfStartTime, indexOfEndTime + 1)
    const thirdOfHeight = height * 0.33
    const renderTextHandler = (time: string, index: number) => {
        return (
            <Text
                key={index}
                style={[styles.textStyle, { marginVertical: thirdOfHeight }]}
            >
                {time}
            </Text>
        )
    }

    return (
        <View style={styles.outerViewContainer}>
            {keepTimeArray.map(renderTextHandler)}
        </View>
    )
}
