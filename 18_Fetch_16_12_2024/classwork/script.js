
const img = document.querySelector('#morty-img');

fetch ('https://rickandmortyapi.com/api/character')
.then((res) => res.json()) 
.then(data => {
    console.log(data.results[1].image);
    img.src = data.results[1].image;
});