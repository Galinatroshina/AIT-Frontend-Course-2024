const img = document.querySelector('#morty-img')
const nameChar = document.querySelector('#morty-name')
const statusChar = document.querySelector('#morty-status')
const originName = document.querySelector('#morty-origin-name')


fetch ('https://rickandmortyapi.com/api/character')
.then((res) => res.json()) 
.then(data => {
    console.log(data.results[1].image);
    img.src = data.results[1].image;
    nameChar.textContent = `Name: ${data.results[1].name}`;
        statusChar.textContent = `Status: ${data.results[1].status}`;
        originName.textContent = `Origin Name: ${data.results[1].origin.name}`;
});
