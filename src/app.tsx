import { Component } from "react"
import * as React from "react"
import { View } from "react-native"
import { allUser, taskSchedules } from "../demoData/data"
import { PhoneMonthView } from "./MonthView/phone/PhoneMonthView"
import { ScheduleList } from "./MonthView/phone/ScheduleList"
export class App extends Component<any, any> {
	render() {
		return (
			<ScheduleList startTime={"0600"} endTime={"1400"} height={60}/>
		)
	}
}
