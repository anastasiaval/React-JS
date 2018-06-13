import './style.css';

import Developer from './developer';

import './date';

const user = new Developer('Анастасия', 'Валерьевна', 'Журавлева');
console.log(user.getFullName()); // задание 2

user.createFullNameHeading(); // задание 3