

export class UserModel {
    name: string
    colour?: string
    pressStatus?: boolean

    constructor(name: string, colour?: string, pressStatus?: boolean) {
        this.name = name;
        this.colour = colour;
        this.pressStatus = pressStatus
    }

}