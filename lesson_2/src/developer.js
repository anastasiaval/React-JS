'use strict';

export default class Developer {
    constructor(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
    }

    getFullName() {
        return(`${this.firstName} ${this.middleName} ${this.lastName}`);
    }

    createFullNameHeading() {
        let div = document.querySelector('.developer'),
            h4 = document.createElement('h4');
        h4.innerHTML = this.getFullName();
        div.appendChild(h4);
    }
}


