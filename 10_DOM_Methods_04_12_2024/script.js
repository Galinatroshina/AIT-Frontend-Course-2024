// сделали тест подключения
// * console.log("hello js!");
// вывели в консоль глобальный объект document в виде html тегов (более читаемый вид html структуры)
// * console.log(document)
// вывели document в виде объекта со всеми вложенными свойствами (более строгий вид html структуры)
// * console.dir(document)

// завели переменную h1 и положили в нее результат поиска через querySelector тега h1 передав аргументом в скобках имя тега
const heading = document.querySelector('h1')
// изменил цвет элемента в оранжевый
heading.style.color = 'orange'
heading.innerText = 'Урок 10: DOM методы'

// document.querySelector('h1').style.color = 'orange'
// document.querySelector('h1').innerText = 'Урок 10: DOM методы'

const btnChange = document.querySelector('#btn-change');
const btnCreate = document.querySelector('#btn-create');

btnChange.addEventListener("click", ()=>{
    heading.style.color = "violet";
    heading.innerText = "Lesson 10: DOM Methods 🏠";
})

btnCreate.addEventListener("click", ()=>{
    let newElement = document.createElement('p')
    newElement.innerText = 'Кажется, я начинаю понимать этот DOM...'
    document.body.append(newElement)
})