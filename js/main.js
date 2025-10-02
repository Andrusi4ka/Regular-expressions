console.log('%cВикористання регулярних виразів для валідації вводу', 'font-weight: bold')
console.log('')
/*
 * #1
 *
 * Написати функцію, яка приймає рядок як вхідний параметр і перевіряє, чи є цей рядок валідною електронною адресою за допомогою регулярного виразу.
 * Функція повертає true, якщо електронна адреса валідна, і false в іншому випадку.
 *
 */

function isValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const isValidEmail = emailPattern.test(email);

  return `Чи валідний email "${email}": ${isValidEmail}`;
}

console.log('%cЗавдання 1', 'font-weight: bold');
console.log(isValidEmail('example@example.com')) // Повинно вивести: true
console.log(isValidEmail('invalid-email'))       // Повинно вивести: false
console.log('');

/*
 * #2
 *
 * Написати функцію, яка приймає рядок як вхідний параметр і перевіряє, чи є цей рядок валідним URL веб-сайту за допомогою регулярного виразу.
 * Функція повертає true, якщо URL валідний, і false в іншому випадку.
 *
 */

/*

*/

function isValidUrl(url) {
  const urlPattern = /^https:\/\/[a-zA-Z0-9._-]+/;

  const isValidUrl = urlPattern.test(url);

  return `Чи валідний url "${url}": ${isValidUrl}`;
}

console.log('%cЗавдання 2', 'font-weight: bold');
console.log(isValidUrl('https://www.example.com')) // Повинно вивести: true
console.log(isValidUrl('invalid-url'))             // Повинно вивести: false
