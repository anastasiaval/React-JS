'use strict';

import './style.css';

import Developer from './developer';

const user = new Developer('Анастасия', 'Валерьевна', 'Журавлева');
console.log(user.getFullName()); // задание 2

user.createFullNameHeading(); // задание 3