import {UserBase} from "./UserBase";

export class UserEstonia extends UserBase {
    mobileIDAuthorization: undefined | boolean;

    constructor(name: string, surname: string, age: number) {
        super(name, surname, age);
    }
}