// Задача 1 - 5
// Использование switch, if и методов slice, toUpperCase, toLowerCase
// Напиши скрипт имитирующий оформление заказа в избранную страну.

// Пользователь может оформить доставку товара к себе в страну, указав ее в переменной countryName.Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.Поэтому надо перезаписать текст переменной countryName так, чтобы первая буква(свойство[0]) была заглавной(метод toUpperCase), а остальные буквы(метод slice) были в нижнем регистре(метод toLowerCase).

// Переменная message будет выводить сообщение.В эту переменную надо будет записать одно из трех сообщений о результате:

// const CANCELED_BY_USER = 'Отменено пользователем!'
// Доставка в ${ } будет стоить ${ } кредитов
// const NO_DELIVERY = 'В выбранную страну доставка не доступна.
// Для определения стоимости(переменная price) или записи сообщения о невозможности доставки используй switch.

// В случае, если доставка возможна(цена больше 0), сформируй сообщение о стоимости доставки в указанную страну с помощью if.

// Ниже приведен список стран и стоимость доставки.

//     Китай - 100 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

const countryName = 'ЧИЛИ';

const CANCELED_BY_USER = 'Отменено пользователем!';
const NO_DELIVERY = 'В выбранную страну доставка недоступна.';
const CHINA = 'Китай';
const AUSTRALIA = 'Австралия';
const INDIA = 'Индия';
const JAMAICA = 'Ямайка';
let message;
let price = 0;
let country;
if (countryName === null) {
  message = CANCELED_BY_USER;
} else {
  country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase(); // Write code on this line
  switch (country) {
    // Write code under this line
    case 'Китай':
      price = 100;
      country = CHINA;
      break;

    case 'Австралия':
      price = 170;
      country = AUSTRALIA;
      break;

    case 'Индия':
      price = 80;
      country = INDIA;
      break;

    case 'Ямайка':
      price = 120;
      country = JAMAICA;
      break;

    default:
      message = 'В выбранную страну доставка недоступна.';
  }
}
if (price) {
  // Write code on this line
  message = `Доставка в ${country} будет стоить ${price} кредитов`;
}

console.log(message);

//если countryName равно "КитаЙ"
// то значение message будет равно
// 'Доставка в Китай будет стоить 100 кредитов'

//если countryName равно null
// то значение message будет равно
// 'Отменено пользователем!'

//если countryName равно "Чили"
// то значение message будет равно
// 'В выбранную страну доставка недоступна.'

// Этапы
// 1. При значении countryName = null значение переменной 'message' должно быть равно 'Отменено пользователем!'
// 2. При значении countryName = 'ЯмайкА' значение переменной 'message' должно быть равно 'Доставка в Ямайка будет стоить 120 кредитов'
// 3. При значении countryName = 'индия' значение переменной 'message' должно быть равно 'Доставка в Индия будет стоить 80 кредитов'
// 4. При значении countryName = 'австралия' значение переменной 'message' должно быть равно 'Доставка в Австралия будет стоить 170 кредитов'
// 5. При значении countryName = 'ЧИЛИ' значение переменной 'message' должно быть равно 'В выбранную страну доставка недоступна.'
// 6. При значении countryName = 'КиТай' значение переменной 'message' должно быть равно 'Доставка в Китай будет стоить 100 кредитов'
// 7. Ожидается использование`if`
// 8. Ожидается использование`slice`
// 9. Ожидается использование`toUpperCase`
// 10. Ожидается использование`toLowerCase`
// 11. Ожидается использование`switch
