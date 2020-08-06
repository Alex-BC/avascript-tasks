// Задача 2 - 4
// Форматирование строки в зависимости от длинны строки
// Напиши функцию formatString(string, maxLength = 40) которая принимает строку и форматирует ее если необходимо.

// Если длина строки не превышает maxLength, функция возвращает ее в исходном виде.
// Если длина больше maxLength, то функция обрезает строку до размера maxLength символов и добавляет в конец строки троеточие ..., после чего возвращает укороченную версию.

function formatString(string, maxLength = 40) {
  // Write code under this line
  let message = '';

  if (string.length < maxLength) {
    message = string;
  } else {
    message = string.split('');
    message = string.slice(0, maxLength) + '...';
  }

  return message;
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// 'Curabitur ligula sapien, tincidunt non.'

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// 'Vestibulum facilisis, purus nec pulvinar...'

console.log(
  formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30),
);
// 'Vestibulum facilisis, purus ne...'

// Этапы;
// Код должен содержать функцию
// Результатом вызова функции должна быть строка
// Результатом вызова функции должна быть пустая строка, если аргумент - пустая строка
// Для аргумента - строки 'Curabitur ligula sapien, tincidunt non.' результатом будет эта же строка
// Для строки 'Vestibulum facilisis, purus nec pulvinar iaculis.' результатом должна быть строка 'Vestibulum facilisis, purus nec pulvinar...'
// Для строки 'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.' результатом должна быть строка 'Nunc sed turpis. Curabitur a felis in nu...'
// Для строки 'Curabitur ligula sapien.' результатом будет эта же строка
// Ожидается использование метода '.length'
// Для строки 'Vestibulum facilisis, purus nec pulvinar iaculis.' и maxLength = 30 результатом должна быть строка 'Vestibulum facilisis, purus ne...'
