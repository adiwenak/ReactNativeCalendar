export class UserModel {
    name: string
    colour?: string

    constructor(name: string, colour?: string) {
        this.name = name;
        this.colour = colour;
    }

}