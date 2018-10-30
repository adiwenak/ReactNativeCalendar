import * as React from "react"
import { View } from "react-native"
import { allUser, taskSchedules } from "../../../demoData/data"

import { User } from "../../shared/model"
import { UserSelection, UserSelectionModel } from "../../UsersView/UserSelection"
import { CalendarMonth, TaskAndUser } from "./CalendarMonth/CalendarMonth"
import { styles } from "./PhoneMonthView.styles"

interface PhoneMonthViewProps {

}

interface PhoneMonthViewState {
    taskAndUsers: TaskAndUser[]
}

const userSelections = allUser.map<UserSelectionModel>((user) => {
    return {
        ...user,
        isSelected: false
    }
})

export class PhoneMonthView extends React.Component<PhoneMonthViewProps, PhoneMonthViewState> {

    constructor(props: PhoneMonthViewProps) {
        super(props)
        this.state = {
            taskAndUsers: []
        }
    }

    public render(): JSX.Element {
        return (
            <View style={styles.container}>
                <View style={styles.userSelectionContainer}>
                    <UserSelection
                        data={userSelections}
                        onSelectedEvent={this.onUserChange}
                    />
                </View>
                <View style={styles.calendarMonthContainer}>
                    <CalendarMonth data={this.state.taskAndUsers}/>
                </View>
                <View style={styles.dayScheduleContainer}>
                </View>
            </View>
        )
    }

    private onUserChange = (selectedUsers: User[]) => {
        const collections: TaskAndUser[] = []
        selectedUsers.forEach((user: User) => {
            const tasks = taskSchedules[user.id]
            collections.push({
                tasks,
                user
            })
        })

        this.setState({taskAndUsers: collections})
    }
}
