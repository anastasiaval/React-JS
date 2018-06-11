'use strict';

/*
Написать функцию loop, которая будет принимать параметры: times (значение по умолчанию = 0), callback (значение по
умолчанию = null) и будет в цикле (times раз), вызывать функцию callback. Если функция не передана, то цикл не должен
отрабатывать ни разу. Покажите применение этой функции.
 */

function loop(times = 0, callback = null) {
    if (callback) {
        for (let i = 0; i < times; i++)
            callback(i);
        return;
    }
    console.log('Функция callback не вызвана.');
}

loop(2);

loop(2, () => console.log('Вызов функции callback.'));

/*
Написать функцию calculateArea, которая будет принимать параметры для вычисления площади (можете выбрать конкретную
фигуру или, основываясь на переданных параметрах, выполнять требуемый алгоритм вычисления площади для переданной в
параметрах фигуры) и возвращать объект вида: { area, figure, input } (где area – вычисленная площадь, figure – название
фигуры, для которой вычислялась площадь, input – входные параметры, по которым было произведено вычисление.
 */

/**
 * Функция определяет тип фигуры по количеству переданных агрументов и вычисляет площадь этой фигуры.
 * @param {number} arg Длина одной стороны фигуры.
 * @returns {Object} result Объект с информацией о фигуре.
 */
function calculateArea(...arg) {
    for (let a of arg) { // Проверяем переданные параметры
        if (isNaN(a) || a <= 0) {
            return console.error('Функция принимает только числа больше нуля.');
        }
    }
    if (arg.length < 2) { // Проверяем количество параметров
        return console.error('Минимальное количество параметров = 2.');
    }
    const result = { // Объект, который возвращает функция
        area: null,
        figure: null,
        input: arg
    };
    if (arg.length === 2) { // Квадрат или прямоугольник
        result.area = (arg[0] * arg[1]).toFixed(2);
        if (arg[0] === arg[1]) {
            result.figure = 'Квадрат';
            return console.log(result);
        }
        result.figure = 'Прямоугольник';
        return console.log(result);
    } else if (arg.length === 3) { // Треугольник
        let h = (arg[0] + arg[1] + arg[2]) / 2; //halfDiameter
        result.area = (Math.sqrt(h * (h - arg[0]) * (h - arg[1]) * (h - arg[2]))).toFixed(2);
        result.figure = 'Треугольник';
        return console.log(result);
    } else {
        return console.error('Неизвестная фигура.');
    }
}

calculateArea(2, 3, 'js'); //Функция принимает только числа больше нуля.
calculateArea(2, 3, -5); //Функция принимает только числа больше нуля.
calculateArea(2); //Минимальное количество параметров = 2.
calculateArea(2.25, 2.25); // Квадрат
calculateArea(2, 3); // Прямоугольник
calculateArea(2, 3, 2); // Треугольник
calculateArea(2, 3, 2, 3); // Неизвестная фигура.