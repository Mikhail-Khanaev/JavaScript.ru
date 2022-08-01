//=========================================================
// А что если...
//=========================================================

let now = new Date();

// alert(now);

// let date = new Date("2017-01-26");
// alert(date);
// alert(date.getFullYear());

// alert(now.getHours());

// час в часовом поясе UTC+0 (лондонское время без перехода на летнее время)
// alert(now.getUTCHours());

// let date = new Date(2013, 0, 32); // 32 Jan 2013 ?!?
// // alert(date);

// let start = Date.now(); // количество миллисекунд с 1 января 1970 года

// // выполняем некоторые действия
// for (let i = 0; i < 100000; i++) {
//     let doSomething = i * i * i;
// }

// let end = Date.now(); // заканчиваем отсчёт времени

// alert(`Цикл отработал за ${end - start} миллисекунд`);

// function diffSubtract(date1, date2) {
//     return date2 - date1;
// }

// function diffGetTime(date1, date2) {
//     return date2.getTime() - date1.getTime();
// }

// function bench(f) {
//     let date1 = new Date(0);
//     let date2 = new Date();

//     let start = Date.now();
//     for (let i = 0; i < 100000; i++) f(date1, date2);
//     return Date.now() - start;
// }

// let time1 = 0;
// let time2 = 0;

// // bench(diffSubtract) и bench(diffGetTime) поочерёдно запускаются 10 раз
// for (let i = 0; i < 10; i++) {
//     time1 += bench(diffSubtract);
//     time2 += bench(diffGetTime);
// }

// alert('Итоговое время diffSubtract: ' + time1);
// alert('Итоговое время diffGetTime: ' + time2);

// let date = new Date(Date.parse('2012-01-26T13:51:50.417-07:00'));

// alert(date);

//=========================================================
// Задание №1
//=========================================================

// let date = new Date(2012, 1, 20, 3, 12);
// alert(date)

//=========================================================
// Задание №2
//=========================================================
// function getWeekDay(date) {
//     // let day = date.getDay();

//     // switch (day) {
//     //     case 0:
//     //         return "ВС";
//     //     case 1:
//     //         return "ПН";
//     //     case 2:
//     //         return "ВТ";
//     //     case 3:
//     //         return "СР";
//     //     case 4:
//     //         return "ЧТ";
//     //     case 5:
//     //         return "ПТ";
//     //     case 6:
//     //         return "СБ";
//     // }

//     let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

//     return days[date.getDay()];
// }


// let date = new Date(2012, 0, 3);  // 3 января 2012 года
// alert(getWeekDay(date));


//=========================================================
// Задание №3
//=========================================================
// function getLocalDay(date) {
//     return date.getDay();
// }

// let date = new Date(2012, 0, 3);  // 3 января 2012 года
// alert(getLocalDay(date));       // вторник, нужно показать 2


//=========================================================
// Задание №4
//=========================================================

// function getDateAgo(date, days) {
//     let dateCopy = new Date(date);

//     dateCopy.setDate(date.getDate() - days);
//     return dateCopy.getDate();
// }

// let date = new Date(2015, 0, 2);

// alert(getDateAgo(date, 1)); // 1, (1 Jan 2015)
// alert(getDateAgo(date, 2)); // 31, (31 Dec 2014)
// alert(getDateAgo(date, 365)); // 2, (2 Jan 2014)
//=========================================================
// Задание №5 Последнее число месяца?
//=========================================================

// function getLastDayOfMonth(year, month) {
//     let data = new Date(year, month + 1, 0);
//     return data.getDate();
// }

// alert(getLastDayOfMonth(2012, 1));


//=========================================================
// Задание №6 Сколько секунду прошло сегодня?
//=========================================================

// function getSecondsToday() {
//     let now = new Date();

//     // создаём объект с текущими днём/месяцем/годом
//     let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

//     let diff = now - today; // разница в миллисекундах
//     return Math.round(diff / 1000); // получаем секунды
// }

// alert(getSecondsToday());

//=========================================================
// Задание №7 Сколько секунд осталось до завтра?
//=========================================================

// function getSecondsToTomorrow() {
//     let now = new Date();

//     // создаём объект с текущими днём/месяцем/годом
//     let today = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

//     let diff = today - now; // разница в миллисекундах
//     return Math.round(diff / 1000); // получаем секунды
// }

// alert(getSecondsToTomorrow());

//=========================================================
// Задание №8 Форматирование относительной даты
//=========================================================

function formatDate(date) {
    let diff = new Date() - date;

    if (diff < 1000) { // меньше 1 секунды
        return 'прямо сейчас';
    }

    let sec = Math.floor(diff / 1000); // преобразовать разницу в секунды

    if (sec < 60) {
        return sec + ' сек. назад';
    }

    let min = Math.floor(diff / 60000); // преобразовать разницу в минуты
    if (min < 60) {
        return min + ' мин. назад';
    }

    // отформатировать дату
    // добавить ведущие нули к единственной цифре дню/месяцу/часам/минутам
    let d = date;
    d = [
        '0' + d.getDate(),
        '0' + (d.getMonth() + 1),
        '' + d.getFullYear(),
        '0' + d.getHours(),
        '0' + d.getMinutes()
    ].map(component => component.slice(-2)); // взять последние 2 цифры из каждой компоненты

    // соединить компоненты в дату
    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}

alert(formatDate(new Date(new Date - 5 * 60 * 1000)));

//=========================================================
// Codewars
//=========================================================
