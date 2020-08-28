// Задача 5 - 4
// переиспользование методов класса
// Напиши класс StringBuilder.На вход он получает один параметр - строку, которую записывает в свойство _value.

// Добавь классу следующий функционал:

// Геттер value - возвращает текущее значение поля _value
// Метод append(str) - получает параметр str(строку) и добавляет ее в конец _value
// Метод prepend(str) - получает параметр str(строку) и добавляет ее в начало value
// Метод pad(str) - получает параметр str(строку) и добавляет ее в начало и в конец _value
// Метод pad должен использовать методы append и prepend

// Дано
// Write code under this line

// console.log(typeof StringBuilder);
// 'function'

// const builder = new StringBuilder('.');

// builder.append('^');
// console.log(builder.value); // '.^'

// builder.prepend('^');
// console.log(builder.value); // '^.^'

// builder.pad('=');
// console.log(builder.value); // '=^.^='

// Решение

// Write code under this line

class StringBuilder {
  constructor(_value) {
    this._value = _value;
  }

  get value() {
    return this._value;
  }

  append(str) {
    return (this._value += str);
  }

  prepend(str) {
    return (this._value = str + this._value);
  }

  pad(str) {
    // this.append(str);
    // this.prepend(str);
    return str + this.append(str) + (this.prepend(str) + str);
  }
}

console.log(typeof StringBuilder);
// 'function'

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='

// Код должен содержать класс 'StringBuilder' - синтаксический сахар функции - коструктора
// Класс 'StringBuilder' должен создавать объект
// Значение свойства append объекта, созданного из класса 'StringBuilder', должно быть функцией
// Значение свойства prepend объекта, созданного из класса 'StringBuilder', должно быть функцией
// Значение свойства pad объекта, созданного из класса 'StringBuilder', должно быть функцией
// Объект, созданный вызовом new StringBuilder('.') при обращении к геттеру 'value' должен возвращать значение '.'
// Объект, созданный вызовом new StringBuilder(''.), используя метод append('^') при обращении к геттеру 'value' должен возвращать значение '.^'
// Объект, созданный вызовом new StringBuilder(''.), используя метод append('^') и prepend('^') при обращении к геттеру 'value' должен возвращать значение '^.^'
// Объект, созданный вызовом new StringBuilder(''.), используя метод append('^'), prepend('^') и pad('=') при обращении к геттеру 'value' должен возвращать значение '=^.^='
// В теле метода 'pad' ожидается использование методов 'append' и 'prepend'
