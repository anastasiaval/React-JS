'use strict';

import './style.css';

import Developer from './developer';

const user = new Developer('Анастасия', 'Валерьевна', 'Журавлева');
console.log(user.sayHi());