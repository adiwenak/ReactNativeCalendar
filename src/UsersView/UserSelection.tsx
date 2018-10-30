
import { Component } from "react"
import * as React from "react"
import { Button, ScrollView, View } from "react-native"
import { User } from "../shared/model"
import { styles } from "./UserSelection.style"

interface ComponentProps {
    data: UserSelectionModel[]
    onSelectedEvent: (selectedUser: User[]) => void
}

export interface UserSelectionModel extends User {
    isSelected: boolean
}

interface SelectedUser {
    [key: number]: UserSelectionModel
}

interface ComponentState {
    selectedUser: SelectedUser
}

export class UserSelection extends Component<ComponentProps, ComponentState> {
    constructor(props: ComponentProps) {
        super(props)
        if (props.data) {
            const selectedUser: SelectedUser = {}
            props.data.forEach((value: UserSelectionModel, idx: number) => {
                if (value.isSelected) {
                    selectedUser[idx] = props.data[idx]
                }
            })

            this.state = {
                selectedUser
            }
        } else {
            this.state = {
                selectedUser: {}
            }
        }
    }

    renderButtons() {
        if (this.props.data) {
            const newSelectedUser = { ...this.state.selectedUser }
            return this.props.data!.map((x: UserSelectionModel, idx: number) => {
                return  <View style={[styles.backgroundMidle]} key={`${idx}`}>
                            <View style={{backgroundColor: newSelectedUser[idx] ? x.colourIndicator : "white"}}>
                            <Button
                                    color={newSelectedUser[idx] ? "white" : "black"}
                                    title={x.name}
                                    onPress={() => {
                                        this.selectUser(x, idx)
                                    }} />
                            </View>
                        </View>
            })
        }

        return null
    }

    selectUser = (user: UserSelectionModel, idx: number) => {
        const newSelectedUser = { ...this.state.selectedUser }
        if (newSelectedUser[idx]) {
            delete newSelectedUser[idx]
        } else {
            newSelectedUser[idx] = user
        }

        this.setState({ selectedUser: newSelectedUser })
        const allValues = Object.keys(newSelectedUser).map((key: any) => newSelectedUser[key])
        this.props.onSelectedEvent(allValues)
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.alightViewWithPadings}>
                    {this.renderButtons()}
                </View>
            </ScrollView>
        )
    }
}
