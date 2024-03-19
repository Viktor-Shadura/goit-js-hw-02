'use strict';

// Задача 1. Замовлення дроїдів

// Станція з продажу ремонтних дроїдів готова до запуску, залишилося написати програмне забезпечення для відділу продажів. Оголоси функцію makeTransaction(quantity, pricePerDroid, customerCredits), яка складає та повертає повідомлення про купівлю ремонтних дроїдів.

// Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:

// quantity — кількість замовлених дроїдів
// pricePerDroid — ціна одного дроїда
// customerCredits — сума коштів на рахунку клієнта

// Доповни функцію таким чином:

// Оголоси змінну для зберігання загальної суми замовлення (загальна вартість усіх замовлених дроїдів) і задай їй вираз розрахунку цієї суми.
// Додай перевірку, чи зможе клієнт оплатити замовлення:
// якщо сума до сплати перевищує кількість кредитів на рахунку клієнта, функція має повертати рядок "Insufficient funds!"
// в іншому випадку функція має повертати рядок "You ordered <quantity> droids worth <totalPrice> credits!", де <quantity> це кількість замовлених дроїдів, а <totalPrice> це їх загальна вартість.

// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

// console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
// console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
// console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"

// Залиш цей код для перевірки ментором.

// На що буде звертати увагу ментор при перевірці:

// Оголошена функція makeTransaction(quantity, pricePerDroid, customerCredits)
// Виклик makeTransaction(5, 3000, 23000) повертає "You ordered 5 droids worth 15000 credits!"
// Виклик makeTransaction(3, 1000, 15000) повертає "You ordered 3 droids worth 3000 credits!"
// Виклик makeTransaction(10, 5000, 8000) повертає "Insufficient funds!"
// Виклик makeTransaction(8, 2000, 10000) повертає "Insufficient funds!"
// Виклик makeTransaction(10, 500, 5000) повертає "You ordered 10 droids worth 5000 credits!"

// ____________________________________
// TODO PRACTICE

// Функція checkForName(fullName, firstName) приймає два параметри та повертає буль true або false - результат перевірки входження підрядка firstName у рядок fullName.

// fullName - рядок, що містить повне ім'я
// firstName - рядок, що містить ім'я для перевірки його входження в повне ім'я
// Доповни тіло функції таким чином, щоб вона повертала результат перевірки входження імені (параметр firstName), у повне ім'я (параметр fullName). Врахуй, що регістр символів в параметрах fullName і firstName наперед не відомий. Перед перевіркою входження не забудь прирівняти їх до однакового регістру.

// Оголошена функція checkForName(fullname, firstName)
// Виклик функції checkForName("Jason Neis", "Jason") повертає true
// Виклик функції checkForName("Jason Neis", "jAsOn") повертає true
// Виклик функції checkForName("Jason Neis", "Jacob") повертає false
// Виклик функції checkForName("Caty Stars", "Caty") повертає true
// Виклик функції checkForName("Caty Stars", "cAtY") повертає true
// Виклик функції checkForName("Caty Stars", "Andromeda") повертає false

function checkForName(fullName, firstName) {
  const lowercaseFirstName = firstName.toLowerCase();

  return fullName.includes(lowercaseFirstName);
}

console.log(checkForName("Jason Neis", "Jason"));
console.log(checkForName("Jason Neis", "jAsOn"));
console.log(checkForName("Jason Neis", "Jacob"));
console.log(checkForName("Caty Stars", "Caty"));
console.log(checkForName("Caty Stars", "cAtY"));
console.log(checkForName("Caty Stars", "Andromeda"));