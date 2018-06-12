'use strict';

export default class Developer {
    constructor(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
    }

    sayHi() {
        return(`${this.firstName} ${this.middleName} ${this.lastName}`);
    }
}