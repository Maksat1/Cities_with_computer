let field   = document.querySelector('#field');
let message = document.querySelector('#message');
let cities = ['Алматы', 'Иссык', 'Астана', 'Экибастуз', 'Караганда',
'Киев', 'Павлодар', 'Пекин', 'Токио', 'Сиэттл', 'Лондон', 'Ливерпуль',
'Манчестер', 'Стокгольм', 'Рим', 'Флоренция', 'Чикаго', 'Альбукерке', 
'Лос-Анжелес', 'Нью-Йорк', 'Мадрид', 'Йоханнесбург', 'Лиссабон', 
'Париж', 'Лион', 'Марсель', 'Орландо', 'Афины', 'Сеул', 'Варшава', 
'Прага', 'Сан-Паулу', 'Венеция', 'Стамбул', 'Амстердам', 'Ванкувер', 
'Кейптаун', 'Сидней', 'Шанхай', 'Дели', 'Мумбаи', 'Дамаск', 'Цюрих',
'Женева', 'Копенгаген', 'Сингапур', 'Гонконг', 'Барселона','Берлин', 
'Берн', 'Богота', 'Бостон', 'Вашингтон', 'Верона', 'Дубай', 'Дублин', 
'Кельн','Майами', 'Мельбурн', 'Милан', 'Монреаль', 'Неаполь', 'Ницца', 
'Осло', 'Торонто', 'Филадельфия', 'Ханой', 'Хельсинки', 'Эдинбург', 'Яффа',
'Детройт', 'Ыспарта', 'Ереван', 'Рейкъявик', 'Одесса', 'Абердин', 'Абу-Даби',
'Аделаида', 'Аксу', 'Александрия', 'Анкара', 'Багдад', 'Баку', 'Барселона',
'Бухарест', 'Валенсия', 'Ванкувер'];

let saidCities = [];

/*
1. Создать массив разрешенных городов
2. Создать массив для названных городов
3. Первый ход Человек вводит город. Проверяется разрешен ли город
4. Если город не разрешен, то сообщение
5. Если разрешен, то записывается в массив saidCities + сообщение
6. Компьютер называет город. Он д.б. из списка, и начинаться на посл.букву пред.города
7. Этот город записывается в массив saidCities
8. Человек вводит город.
9. Проверка (город разрешен, начинается на посл. букву) 
10. Если проверка пройдена, то записывается в массив saidCities.
11. Если проверка не пройдена, то сообщение
12. Кто не может назвать город - проиграл.
*/

function humanMove() {
    field.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            new_city = field.value;
            if (saidCities.length === 0) {
                if ( cities.includes(new_city)) {
                saidCities.push(new_city);
                message.textContent = 'Вы назвали город ' + new_city;
                } else {
                message.textContent = 'Такого города нет.'
                }
                compMove();
            } else {
                if ( cities.includes(new_city) && (last_let(saidCities) == new_city[0]) && (!saidCities.includes(new_city)) ) {
                    saidCities.push(new_city);
                    message.textContent = 'Вы назвали город ' + new_city;
                    compMove();
                } else {
                    message.textContent = 'wrong'
                }
            }
            
        }
    })  
}

function compMove() {
    last_let(saidCities);

    let cityFound = false;
    for (let city of cities) {
        if ( (city[0] == last_let(saidCities)) && (!saidCities.includes(city))) {
            saidCities.push(city);
            cityFound = true;
            break;
        } 
    }
    
    if (!cityFound) {
        message.textContent = 'Компьютер проиграл';
    } else {
    message.textContent = 'Компьютер назвал ' + saidCities[saidCities.length-1] + '. '
        + 'Вам на ' + last_let(saidCities);
    console.log(saidCities)
}
}
function last_let(saidCities) {
    let last_city = saidCities[saidCities.length - 1];
    let last_letter = last_city[last_city.length - 1].toUpperCase();
    console.log(last_letter);
    return last_letter;
}

humanMove();