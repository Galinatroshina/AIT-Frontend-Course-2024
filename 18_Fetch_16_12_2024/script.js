// ! теория

// API - Application Programming  Interface - интерфейс для общения программ друг с другом
// делаем fetch запрос за данными к API (частный случай работы с сервером)


//добавить комменты!!!

// const data = fetch('https://dog.ceo/api/breeds/image/random')
// * ответ с сервера мы получаем в формате JSON
// JSON - JavaScript Object Notation

// ! делаем запрос

// находим пустой элемент img, чтобы добавить в него данные из API

const img = document.querySelector('#dog-img')
const btnUpd = document.querySelector('#btn-update')


function getDog() {
fetch('https://dog.ceo/api/breeds/image/random')
//первым .then() дожидаемся сырых данных и преобразуем их в JS объект с помощью .json()
.then(res => res.json())
// в data уже придут обработанные данные готовые к использованию
.then(data => {
    // перезаписываем атрибут src значением из data (это объект и у дата два ключа message and status)
    img.src = data.message
});
}

getDog()

btnUpd.addEventListener('click', getDog)

