import { Component } from "react"
import * as React from "react"
import { View } from "react-native"
import { CalendarMonth } from "./MonthView/CalendarMonth"

export class App extends Component<any, any> {
	render() {
		return (
			<View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
				<CalendarMonth />
			</View>
		)
	}
}
