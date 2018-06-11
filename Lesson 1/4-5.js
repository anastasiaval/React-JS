'use strict';

/*
При помощи генератора написать функцию-анкету, которая запрашивает у пользователя на ввод параметры и передает их в
генератор. В конце, когда генератор завершается, он должен вернуть все введенные входные параметры в виде объекта. Этот
объект нужно вывести в консоли.
 */

function* generateSequence() {
    yield prompt('Имя:');
    yield prompt('Возраст:');
    return prompt('Город:');
}

let generator = generateSequence();
let user = {};

user.name = generator.next().value;
user.age = generator.next().value;
user.city = generator.next().value;

console.log(user);

/*
Написать цикл, который создает массив промисов. Внутри каждого промиса происходит обращение к ресурсу
(https://jsonplaceholder.typicode.com/users/number), где вместо number подставляется число от 1 до 10. В итоге должно
получиться 10 промисов. Следует дождаться выполнения загрузки всеми промисами и далее вывести массив загруженных данных.
 */

let promises = [];

for (let number = 1; number <= 10; number++) {
    let promise = new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/users/' + number, true);
        xhr.send();

        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) {
                return;
            } else if (xhr.status !== 200) {
                reject('Error', xhr.status, xhr.statusText);
            } else {
                resolve(JSON.parse(xhr.responseText));}}
    });

    promise.then(result => {
            console.log(promise);
            promises.push(result);
        },
        error => {
            console.log(error);
        }
    );
}

console.log(promises);



