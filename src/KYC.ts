import {UserLatvia} from "./UserLatvia";
import {UserEstonia} from "./UserEstonia";

export class KYC {
    static activateMobileIDForEstonia(user: UserEstonia): void {
        // если юзеру больше 16 лет
        if (user.age >= 16) {
            user.mobileIDAuthorization = true;
        } else {
            throw new Error("User is too young");
        }
    }

    static activateEParakstsForLatvia(user: UserLatvia): void {
        // если юзеру больше 18 лет
        if (user.age >= 18) {
            user.activateEParakstsForLatvia = true;
        } else {
            throw new Error("User is too young");
        }
    }
}