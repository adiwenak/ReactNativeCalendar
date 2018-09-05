import { Component } from "react"
import * as React from "react"
import { Platform, StyleSheet, Text, View } from "react-native"
import { Provider } from "react-redux"
import Navigator from "./mainNavigator"
import store from "./Store/store"
export class App extends Component<any, any> {
	render() {
		return (
			<Provider store={store}>
				<Navigator />
			</Provider>
		)
	}
}
