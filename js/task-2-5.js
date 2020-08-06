// Задача 2 - 5
// Функция предикат
// Функция предикат возвращает true или false

// Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку.Функция проверяет ее на содержание слов spam и sale.Если нашли запрещенное слово то функция возвращает true, если запрещенных слов нет функция возвращает false.Слова в строке могут быть в произвольном регистре.

function checkForSpam(str) {
  'use strict';
  // Write code under this line
  const string = str.toLowerCase();

  return string.includes('spam') || string.includes('sale') ? true : false;
}

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// Этапы
// Код должен содержать функцию
// Результатом вызова функции должен быть булеан
// Результатом вызова функции должна false, если аргумент - пустая строка
// Для аргумента - строки 'Latest technology news' результатом будет false
// Для аргумента - строки 'JavaScript weekly newsletter' результатом будет false
// Для аргумента - строки 'Get best sale offers now!' результатом будет true
// Для аргумента - строки '[SPAM] How to earn fast money?' результатом будет true
// Ожидается использование метода '.includes'
// Ожидается использование метода '.toLowerCase'
