// console.log("hello!");
// console.log(4 * 4);
// const heading = document.querySelector('h1')
// heading.style.display = 'flex'
// console.log(heading)

// ! JavaScript basics:

// * объявление переменных

// ! * let

// * объявляем переменную с помощью let - значение можно переприсвоить

let student;

// если переменной не присвоено значение - она равна undefined (ничего)
console.log(typeof student)
console.log(student);

// присваиваем значение
student = "Jury";
student = "Natalia";

// * оператор typeof используется для проверки типа переменной
console.log(typeof student)
console.log(student);

// в JS мы можем присвоить переменной значение другого типа
student = 100

console.log(typeof student)
console.log(student);

// ! * const

// константу нельзя объявить не присвоив значение
const language = 'JavaScript';

// константе нельзя переприсвоить другое значение
// language = 'Python'


console.log(language)