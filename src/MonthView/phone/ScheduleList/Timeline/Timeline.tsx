import * as React from "react"
import { Text, View } from "react-native"
import { fullTimeArray, fullTimeArrayRender } from "./Timeline.constants"
import styles from "./Timeline.styles"

export type TimeType = "0000" | "0100" | "0200" | "0300" | "0400" | "0500" | "0600" | "0700" | "0800" | "0900" |
                "1000" | "1100" | "1200" | "1300" | "1400" | "1500" | "1600" | "1700" | "1800" | "1900" | "2000" |
                "2100" | "2200" | "2300" | "2400"

interface TimelineProps {
    startTime: TimeType
    endTime: TimeType
    height: number
}

export const Timeline = ({startTime, endTime, height}: TimelineProps) => {
    const indexOfStartTime = fullTimeArray.indexOf(startTime)
    const indexOfEndTime = fullTimeArray.indexOf(endTime)
    const keepTimeArray = fullTimeArrayRender.slice(indexOfStartTime, indexOfEndTime + 1)
    const halfOfHeight = height * 0.5
    const renderTextHandler = (time: string, index: number) => {
        return (
            <View key={index} style={{height}}>
                <Text style={styles.textStyle}>
                    {time}
                </Text>
            </View>
        )
    }

    return (
        <View style={styles.outerViewContainer}>
            <View style={{height: halfOfHeight}}/>
                {keepTimeArray.map(renderTextHandler)}
            <View style={{height: halfOfHeight}}/>
        </View>
    )
}
