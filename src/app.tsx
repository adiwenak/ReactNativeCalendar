import { Component } from "react"
import * as React from "react"
import { allUser, taskSchedules } from "../demoData/data"
import { PhoneMonthView } from "./MonthView/phone/PhoneMonthView"

export class App extends Component<any, any> {
	render() {
		return (
			<PhoneMonthView
				users={allUser}
				tasks={taskSchedules}
			/>
		)
	}
}
