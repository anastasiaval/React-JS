'use strict';

/*
Необходимо написать иерархию классов вида:
Human -> Employee -> Developer
Human -> Employee -> Manager
Каждый Менеджер (Manager) должен иметь внутренний массив своих сотрудников (разработчиков), а также методы по удалению и
 добавлению разработчиков.
Каждый Разработчик (Developer) должны иметь ссылку на Менеджера и методы для изменения менеджера (имеется в виду
возможность назначить другого менеджера).
У класса Human должны быть следующие параметры: name (строка), age (число), dateOfBirth (строка или дата).
У класса Employee должны присутствовать параметры: salary (число), department (строка).
В классе Human должен присутствовать метод displayInfo, который возвращает строку со всеми параметрами экземпляра Human.
В классе Employee должен быть реализован такой же метод (displayInfo), который вызывает базовый метод и дополняет его
параметрами из экземпляра Employee.
Чтобы вызвать метод базового класса, необходимо внутри вызова метода displayInfo класса Employee написать:
super.displayInfo(). Это вызовет метод displayInfo класс Human и вернет строку с параметрами Human.
 */

class Human {
    constructor(name, age, dateOfBirth) {
        this.name = name;
        this.age = age;
        this.dateOfBirth = dateOfBirth;
    }

    displayInfo() {
        console.log(this);
    }
}

class Employee extends Human {
    constructor(name, age, dateOfBirth, salary, department) {
        super(name, age, dateOfBirth);
        this.salary = salary;
        this.department = department;
    }

    displayInfo() {
        super.displayInfo();
    }
}

class Developer extends Employee {
    constructor(name, age, dateOfBirth, salary, department, manager) {
        super(name, age, dateOfBirth, salary, department);
        this.manager = manager;
    }

    myManager(mng) {
        this.manager = mng;
    }

    displayInfo() {
        super.displayInfo();
    }
}

class Manager extends Employee {
    constructor(name, age, dateOfBirth, salary, department, developers) {
        super(name, age, dateOfBirth, salary, department);
        this.developers = developers;
    }

    addDeveloper(dev) {
        this.developers.push(dev);
    }

    removeDeveloper(dev) {
        for (let i in this.developers) {
            if (this.developers[i] === dev) {
                this.developers.splice(i, 1);
            }
        }
    }

    displayInfo() {
        super.displayInfo();
    }
}
// Developers
let coder1 = new Developer('John Smith', 25, '12/10/2018', 60000, 'frontend', 'Will Wilson');
let coder2 = new Developer('Marie Davis', 27, '09/07/1990', 80000, 'backend', 'Chuck Norris');
let coder3 = new Developer('Jack Williams', 30, '29/06/1987', 70000, 'backend', 'Will Wilson');
let coder4 = new Developer('Alice Rivera', 24, '16/12/1993', 70000, 'frontend', 'Chuck Norris');

//Managers
let mng1 = new Manager('Will Wilson', 30, '11/05/1988', 40000, 'IT', [coder1, coder3]);
let mng2 = new Manager('Chuck Norris', 39, '06/06/1978', 100000, 'IT', [coder2, coder4]);

mng1.removeDeveloper(coder1); // Уилл убрал Джона!
mng2.addDeveloper(coder1); // Чак добавил Джона!

mng1.displayInfo();
mng2.displayInfo();

coder1.myManager(mng1); // Джон вернулся к Уиллу!
coder1.displayInfo();

coder4.department = 'backend';
coder4.salary = 80000;
coder4.displayInfo(); // А Элис перешла в backend!

mng2.age = 40; // Сегодня ДР Чака!
mng2.displayInfo();

coder1.dateOfBirth = '12/10/1992'; // Правильный год!
coder1.displayInfo();