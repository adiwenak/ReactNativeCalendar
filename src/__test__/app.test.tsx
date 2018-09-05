import * as React from "react"
import { Text } from "react-native"
import * as renderer from "react-test-renderer"
import { App } from "../app"

it("renders correctly", () => {
    const hello = renderer.create(<App />).toJSON()
    expect(hello).toMatchSnapshot()
})
