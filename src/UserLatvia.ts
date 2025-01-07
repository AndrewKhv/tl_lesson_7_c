import {UserBase} from "./UserBase";

export class UserLatvia extends UserBase {
    activateEParakstsForLatvia: undefined | boolean;

    constructor(name: string, surname: string, age: number) {
        super(name, surname, age);
    }
}