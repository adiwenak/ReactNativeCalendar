import { Component } from "react"
import * as React from "react"
import { View } from "react-native"
import { MonthSelection } from "./MonthView/phone/MonthSelection/MonthSelection"
import { Month } from "./shared/model"

export class App extends Component<any, any> {
	render() {
		return (
			<View style={{
				flex: 1,
				marginTop: 200,
				marginLeft: 50,
				marginRight: 50
			}} >
				<MonthSelection onMonthChange={(month: Month, year: number) => {
					// tslint:disable-next-line:no-console
					console.log(`${month} - ${year}`)}}/>
			</View >
		)
	}
}
