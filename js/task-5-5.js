// Задача 5 - 5
// класс
// Напиши класс Car с указанными свойствами и методами.

// class Car {
//     /*
//      * Добавь `статический` метод
//      * `getSpecs(car)`, который принимает
//      * объект-машину как параметр
//      * и возвращает шаблонную строку
//      * со свойствами и значениями объекта.
//      * Свойства:
//      *   maxSpeed,
//      *   speed,
//      *   isOn,
//      *   distance,
//      *   price
//      * Пример строки, полученной этим методом:
//      * 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'
//      */

//     /*
//      * Конструктор получает объект настроек.
//      *
//      * Добавь свойства будущеего экземпляра класса:
//      *  speed - текущая скорость,
//      *          начальное значение `0`
//      *  price - цена автомобиля
//      *  maxSpeed - максимальная скорость
//      *  isOn - заведен ли автомобиль.
//      *         Значения `true` или `false`,
//      *         начальное значение false
//      *  distance - пробег в километрах,
//      *             начальное значение `0`
//      */
//     constructor() { }

//     /*
//      * Добавь геттер и сеттер
//      * для свойства `price`, который будет
//      * работать с свойством цены автомобиля.
//      *
//      * ВАЖНО: для записи методов get и set
//      * значение параметра записывают с
//      * подчеркиванием. См. ниже пример 1.
//      */

//     /*
//      * Метод, который заводит автомобиль
//      * Записывает в свойство `isOn` значение `true`
//      */
//     turnOn() { }

//     /*
//      * Метод, чтобы заглушить автомобиль
//      * Этот метод должен записывать
//      * в свойство isOn значение false,
//      * и сбрасывать текущую скорость до 0
//      */
//     turnOff() { }

//     /*
//      * Этот метод должен добавлять
//      * к свойству `speed` полученное
//      * значение, при условии,
//      * что результирующая скорость
//      * не больше чем значение свойства `maxSpeed`
//      */
//     accelerate(value) { }

//     /*
//      * Этот метод должен отнимать
//      * от свойства `speed`
//      * полученное значение, при условии,
//      * что результирующая скорость не меньше 0
//      */

//     decelerate(value) { }

//     /*
//      * Этот метод должен добавлять к свойству
//      * `distance` пробег в километрах,
//      * т.е. hours * speed,
//      * но только в том случае,
//      * если машина заведена!
//      */
//     drive(hours) { }
// }

// #### Пример 1.

//     ```js
// class Guest {
//   // Собственные свойства класса размещаем в конструкторе
//   constructor(name, roomNumber) {
//     /* параметр name не должен
//      *   совпадать с названием свойства
//      *   но должен быть похож.
//      *   Поэтому используют прием смены
//      *   названия добавляя символ '_'.
//      *   Хотя это может любой другой символ
//      */
//     this._name = name;
//   }

//   // Используем геттеры и сеттеры для описания интерфейса доступа к свойствам
//   get name() {
//     return this._name;
//   }

//   set name(value) {
//     this._name = value;
//   }
// }

// Дано

// class Car {
//   // Write code under this line
//   getSpecs() { }
//   constructor() { }
//   get price() { }
//   set price(value) { }
//   turnOn() { }
//   turnOff() { }
//   accelerate(value) { }
//   decelerate(value) { }
//   drive(hours) { }
// }

// const mustang = new Car({ maxSpeed: 200, price: 2000 });
// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

// // console.log(Car.getSpecs(mustang));
// // 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

// // console.log(Car.getSpecs(mustang));
// // 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

// // console.log(mustang.price); // 2000
// mustang.price = 4000;
// // console.log(mustang.price); // 4000

// Решение

class Car {
  // Write code under this line

  static getSpecs(car) {
    // return `maxSpeed: ${this.maxSpeed}, speed: ${this.speed}, isOn: ${this.isOn}, distance: ${this.distance}, price: ${this.price}`;
    return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`;
  }

  // constructor(maxSpeed, speed = 0, isOn = false, distance = o, price) {
  //   this.speed = speed;
  //   this._price = price;
  //   this.maxSpeed = maxSpeed;
  //   this.isOn = isOn;
  //   this.distance = distance;
  // }
  constructor(car) {
    this.speed = 0;
    this._price = car.price;
    this.maxSpeed = car.maxSpeed;
    this.isOn = false;
    this.distance = 0;
  }

  get price() {
    return this._price;
  }

  set price(value) {
    this._price = value;
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  accelerate(value) {
    // if (this.speed + value <= this.speed.maxSpeed)
    // if (this.speed + value < this.speed.maxSpeed) {
    //   this.speed += value;
    // } else {
    //   this.speed = this.maxSpeed;
    // }

    // let newSpeed = this.speed + value;
    // if (newSpeed < this.maxSpeed) {
    //   this.speed = newSpeed;
    // }

    let acceleratedSpeed = this.speed + value;
    if (acceleratedSpeed <= this.maxSpeed) {
      this.speed = acceleratedSpeed;
    } else {
      this.speed = this.maxSpeed;
    }
  }

  decelerate(value) {
    // if (this.speed - value > 0) {
    //   this.speed -= value;
    // } else {
    //   this.speed = 0;
    // }

    let deceleratedSpeed = this.speed - value;
    if (deceleratedSpeed > 0) {
      this.speed = deceleratedSpeed;
    } else {
      this.speed = 0;
    }
  }
  drive(hours) {
    if (this.isOn) {
      this.distance += hours * this.speed;
    }
  }
  // let newSpeed = this.speed - value;
  // if (newSpeed > 0) {
  //   this.speed = newSpeed;
  // }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000

// Класс Car JS должен определить как функцию - конструктор
// Ожидается использование метода 'static getSpecs'
// Статический метод 'static getSpecs' должен возвращать строку со свойствами и значениями объекта согласно спецификации.
// Методы get и set для свойства price должны выполняться согласно спецификации.
//   Метод 'turnOn' должен задавать свойству 'isOn' значение 'true'.
//     Метод 'turnOff' должен задавать свойству 'isOn' значение 'false' и свойству 'speed' значение '0'.
//       Метод 'accelerate' должен добавлять к свойству 'speed' значение 'value'
// Метод 'accelerate' должен оставлять свойству 'speed' значение 'maxSpeed', если значение 'value' в сумме со значением 'speed' превышают значение 'maxSpeed'.
//   Метод 'decelerate' должен уменьшать свойство 'speed' на значение 'value'
// Метод 'decelerate' должен оставлять свойству 'speed' значение '0', если значение 'value' в сумме со значением 'speed' превышают значение '0'.
//   Метод 'drive' должен изменять свойство 'distance', добавляя произведение значений 'hours' и 'speed'