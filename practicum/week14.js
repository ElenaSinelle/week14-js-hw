//Задание 1
//Создайте массив myFirstArray содержащий строки, числа, булевы значения. Выведите его в консоль.

//ваианты создания:
// const myFirstArray = [5, 'cats', true];
// const myFirstArray = Array.of(5, 'cats', true);
const myFirstArray = new Array (5, 'cats', true);
console.log(`Задание 1: массив myFirstArray -[${myFirstArray}]`);

//Задание 2
//Создайте массив mySecondArray, заполните его любыми значениями. Выведите длину массива.

const mySecondArray = ["It's", "something", true, "here"];
console.log(`Задание 2: длинна массива mySecondArray = ${mySecondArray.length}`);

//Задание 3
//Создайте массив myInformation, который содержит ваше имя, день рождения, месяц рождения и знак зодиака. Выведите массив в консоль, разделяя элементы пробелами. Вам понадобится метод join().

const myInformation = ['Elena', 10, 'January', 'Capricorn'];
console.log(`Задание 3: ${myInformation.join(' ')}`);

//Задание 4
//Добавьте в массив countries значения 'Italy' с индексом 5, 'Spain' с индексом 6 и 'France' с индексом 7. Добавление элементов произведите с помощью метода push().
let countries = ['Austria', 'Belgium', 'Netherlands', 'Czechia', 'Croatia'];
countries.push('Italy');
countries.push('Spain');
countries.push('France');
console.log(`Задание 4: массив countries - [${countries}]`);

//Задание 5
//У вас есть массив countries, содержащий названия нескольких стран. Используя метод массива, выведите в консоль последний элемент массива. Для этого можно использовать свойство length и индексацию элементов.
//Обратите внимание, в JavaScript индексация элементов в массиве начинается с 0.
console.log(`Задание 5: последний элемент массива countries - ${countries[countries.length-1]}`);

// или так
// console.log(`Задание 5: последний элемент массива countries - ${countries.at(-1)}`);

//или так
// let newCountries = countries.slice().reverse(); //исходный массив не изменился
// console.log(`Задание 5: последний элемент массива countries - ${newCountries[0]}`);

//Задание 6
//У вас есть массив countries, содержащий названия нескольких стран. Используя метод массива shift, извлеките первый элемент массива и выведите его в консоль. Обратите внимание, что сам массив должен сохраниться в переменной.
let deleted = countries.slice().shift(); // если исходный массив не должен меняться
let absDeleted = countries.shift(); //исходный массив изменился

console.log(`Задание 6: удалённый элемент массива countries - ${absDeleted}`);

//Задание 7
//У вас есть массив numbers, содержащий несколько чисел. Используя метод массива map, создайте новый массив squaredNumbers, в котором каждый элемент будет являться квадратом соответствующего элемента из массива numbers. Выведите полученный массив squaredNumbers в консоль.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const squaredNumbers = numbers.map(item => item ** 2);

console.log(`Задание 7: массив squaredNumbers - [${squaredNumbers}]`);

//Задание 8
//У вас есть массив colors, содержащий названия различных цветов. Используя метод массива forEach, выведите каждый элемент массива в консоль.
let colors = ['red', 'green', 'blue', 'yellow', 'orange'];
colors.forEach(item => console.log(`Задание 8: цвет - ${item}`));

//Задание 9
//Добавьте в массив russianCities значения 'Санкт-Петербург' с индексом 0, 'Москва' с индексом 1 и 'Екатеринбург' с индексом 2. Добавление элементов выполните с помощью оператора spread.
let russianCities = ['Казань', 'Нижний Новгород'];
let addedCities = ['Санкт-Петербург', 'Москва', 'Екатеринбург'];
russianCities = [...addedCities, ...russianCities];
console.log(`Задание 9: [${russianCities}]`);

//Задание 10
//Напишите функцию, которая вычисляет сумму первого (индекс 0) и последнего элемента массива numbers и выводит результат в консоль. При вычислении индекса последнего элемента используйте свойство length массива.
//Обратите внимание, что массив numbers создан в задании 7.

//я себе чуть расширила задачку) теперь можно складывать любое количество аргументов
function add(...args) {
  return args.reduce((sum, item) => sum + item);
}

console.log(`Задание 10: сумма первого и последнего элемента массива numbers = ${add(numbers[0], numbers[numbers.length - 1])}`);

//Задание 11
//У вас есть массив numbers, содержащий числа от 1 до 10. Напишите функцию filterEvenNumbers, которая принимает этот массив в качестве аргумента и выводт в консоль новый массив, содержащий только чётные числа из исходного массива, с использованием метода filter().
function filterEvenNumbers(arr) {
  return arr.filter(item => item % 2 === 0);
}

console.log(`Задание 11: массив filterEvenNumbers - [${filterEvenNumbers(numbers)}]`);

//Задание 12
//Напишите функцию sortAndPrint, которая принимает копию массива randomNumbers с помощью оператора spread и сортирует его в порядке возрастания с использованием метода sort(). Затем выведите отсортированный массив чисел в консоль.
let randomNumbers = [72, 45, 19, 84, 37, 56, 91, 23, 68, 10, 98, 32];

function sortAndPrint(arr) {
  return [...arr].sort((a, b) => a - b);
}

console.log(`Задание 12: отсортированниый массив - [${sortAndPrint(randomNumbers)}]`);