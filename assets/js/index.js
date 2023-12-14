//Задание 1
// Создайте переменную currentDate и присвойте ей текущую дату. Значение выведите в консоль.
const currentDate = new Date();
console.log(currentDate);
//Задание 2
// Создайте переменную currentYear и присвойте ей текущий год. Значение выведите в консоль.
const currentYear = currentDate.getFullYear()
console.log(currentDate);
//Задание 3
// Создайте переменную currentMonth и присвойте ей текущий месяц (от 0 до 11, где 0 - январь, 11 - декабрь). Значение выведите в консоль.
const currentMonth = currentDate.getMonth();
console.log(currentMonth);
//Задание 4
// Создайте переменную currentDay и присвойте ей текущий день месяца. Значение выведите в консоль.
const currentDay = currentDate.getDate();
console.log(currentDay);
//Задание 5
// Создайте переменную birthday и присвойте ей дату вашего дня рождения в текущем году. Значение выведите в консоль.
const birthday = new Date('2023-7-5');
console.log(birthday);
//Задание 6
// Создайте переменную futureDate и присвойте ей будущую дату (например, через 1 месяц и 10 дней от текущей даты). Значение выведите в консоль.
const futureDate = new Date();
futureDate.setDate(futureDate.getDate()+40);
console.log(futureDate);
//Задание 7
// Выведите в консоль разницу в днях между futureDate и currentDate
let datePassed = futureDate.getDate() - currentDate.getDate();
console.log(datePassed);
//Задание 8
// Создайте переменную pastDate и присвойте ей прошедшую дату (например, 5 дней назад от текущей даты). Значение выведите в консоль.
const pastDate = new Date();
pastDate.setDate(pastDate.getDate()-5);
console.log(pastDate);
//Задание 9
// Выведите в консоль разницу в днях между currentDate и pastDate
console.log(currentDate.getDate()-pastDate.getDate());
//Задание 10
// Создайте переменную nextWeek и присвойте ей дату следующей недели. Значение выведите в консоль.

//Задание 11
// Выведите в консоль день недели для nextWeek

//Задание 12
// Создайте переменную futureYear и присвойте ей значение текущего года плюс 5. Значение выведите в консоль.
const futureYear = currentDate.getFullYear() + 5;
console.log(futureYear);
//Задание 13
// Создайте переменную futureDateInFutureYear и присвойте ей дату вашего дня рождения в будущем году (futureYear). Значение выведите в консоль.
const futureDateInFutureYear = birthday + 365;
console.log(futureDateInFutureYear);
//Задание 14
// Выведите в консоль разницу в годах между futureYear и текущим годом

//Задание 15
// Используя метод Date.parse(), создайте новый объект date и преобразуйте переменную strDate в дату.
// Выведите объект date в консоль.
const strDate = '2023-06-15T08:30:00.000Z';
const dateParse = Date.parse(strDate);

console.log(dateParse);
//Задание 16
// Используя метод Date.parse(), получите таймстамп (количество миллисекунд) из переменной strDate.
// Выведите таймстамп в консоль.
//Преобразуем дату сообщения в таймстамп
const messageTimestamp = Date.parse(strDate);
	
//Получаем текущий таймстамп
const currentTimestamp = Date.now();

//Рассчитываем разницу в миллисекундах между текущим временем и временем сообщения
const timeDiff = currentTimestamp - messageTimestamp;

console.log(timeDiff);
//Задание 17
// Используя метод Date.parse(), попытайтесь преобразовать переменную wrongDate в дату. Добавьте условие, если результат преобразования является NaN, выведите в консоль сообщение 'Неправильный формат даты', в другом случае, выведите сообщение 'Правильный формат даты'.
// Подсказка: используйте условие if...else
const wrongDate = '2023/06/15';
const wrongDatePars = Date.parse(wrongDate);
console.log(wrongDatePars);
if (wrongDate >= NaN) {
    console.log("Неправильный формат даты");
} else {
    console.log("Правильный формат даты");
} 
//Задание 18
// Используя цикл if...else, проверьте является ли переменная number положительным. Результат выведите в консоль.
const number = 231;
if (number >=0 ){
    console.log(number);
} else {
    console.log("Число отрицательное");
}
//Задание 19
// Используя цикл if...else, проверьте является ли переменная number чётным числом. Результат выведите в консоль.
if (number % 2 ===0) {
    console.log("Четное число");
} else {
    console.log("Число нечетное");
}
//Задание 20
// Используя цикл if...else, проверьте является ли переменная number кратным 3. Результат выведите в консоль.
if (number / 3) {
    console.log(number/3);
} else {
    console.log("Переменная не делится на 3");
}
//Задание 21
// Используя цикл if...else, проверьте является ли переменная number однозначным. Результат выведите в консоль.
if (number >= 0 && number < 10) {
    console.log("Переменная однозначное")
} else {
    console.log("Переменная неоднозначное");
}
//Задание 22
// Используя цикл if...else, проверьте является ли переменная number двузначным. Результат выведите в консоль.
if (number >= 10 && number < 100) {
    console.log("Переменная двузначная");
} else {
    console.log("Переменная недвузначная");
}
//Задание 23
// Используя цикл if...else, проверьте является ли переменная number положительным или нулём. Результат выведите в консоль.
if (number >=0) {
    console.log("Переменная положительная или ноль");
} else {
    console.log("Переменная отрицательная");
}
//Задание 24
// Используя цикл if...else, проверьте является ли переменная number кратным 5 или 7. Результат выведите в консоль.
if (number/'5' && number/'7') {
    console.log(number / 5, number / 7);
} else {
    console.log("Переменная не делится на 5 и 7");
}
//Задание 25
// Используя цикл if...else, проверьте является ли переменная number отрицательным или нулём. Результат выведите в консоль.
if (number <= 0) {
    console.log("Переменная отрицательная или ноль");
} else {
    console.log("Переменная положительная");
}
//Задание 26
// Используя цикл if...else, проверьте является ли переменная number трёхзначным положительным числом. Результат выведите в консоль.
if (number > 99 && number < 1000) {
    console.log('Переменная является трехзначным положительным числом'); 
} else {
    console.log('Переменная не является трехзначным положительным числом');
}
//Задание 27
// Используя switch case, напишите программу, которая принимает на вход целое число от 1 до 7 и выводит в консоль название соответствующего дня недели (например, 1 - "Понедельник", 2 - "Вторник" и т.д.).
let day = '';

switch(new Date().getDay()) {
  case 0:
    day = 1;
    break;
  case 1:
    day = 2;
    break;
  case 2:
    day = 3;
    break;
  case 3:
    day = 4;
    break;
  case 4:
    day = 5;
    break;
  case 5:
    day = 6;
    break;
  case 6:
    day = 7;
    break;
  default:
    day = 'Неизвестный день';
}

console.log('Сегодня ' + day + '.');  
//Задание 28
// Используя цикл switch case, напишите программу, которая принимает на вход символ направления (N, S, E, W) и выводит в консоль полное название этого направления (N - "Север", S - "Юг", E - "Восток", W - "Запад").
let direction = 'W';
let fullName;

switch (direction) {
    case 'W' :
        console.log('Запад');
    break;
    case 'N' :
        console.log('Север');
    break;
    case 'E' :
        console.log('Восток');
    break;
    case 'S' :
        console.log('Юг');
    break;
}
