import * as React from "react"
import { ScrollView, Text, View } from "react-native"
import styles from "./ScheduleList.styles"

import { ScheduleListOutline } from "./ScheduleListOutline"
import { Timeline } from "./Timeline"

interface Props {
    startTime: any
    endTime: any
    height: number
}

export const ScheduleList = ({startTime, endTime, height}: Props) => {
    const numberToRender = (endTime - startTime) / 100
    return (
        <ScrollView>
            <View style={{flexDirection: "row"}}>
                <View style={styles.leftEventHeader}/>
                <View style={styles.rightEventHeader}>
                    <Text style={styles.textStyle}>{"Event"}</Text>
                </View>
            </View>
            <View style={styles.outerViewContainer}>
                <Timeline startTime={startTime} endTime={endTime} height={height}/>
                <ScheduleListOutline height={height} numberToRender={numberToRender}/>
            </View>
        </ScrollView>
    )
}
