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
        const div = document.querySelector('.developer');
        const h4 = document.createElement('h4');
        h4.innerHTML = this.getFullName();
        div.appendChild(h4);
    }
}


