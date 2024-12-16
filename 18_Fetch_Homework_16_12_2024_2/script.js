const gallery = document.querySelector('#all-characters')

fetch('https://rickandmortyapi.com/api/character')
    .then((res) => res.json())
    .then(data => {
        console.log(data)

        data.results.forEach(character => {
            
            const characterDiv = document.createElement('div');
            characterDiv.classList.add('character');

            
            const img = document.createElement('img');
            img.src = character.image;
            img.alt = character.name;

            
            const h2 = document.createElement('h2');
            h2.textContent = character.name;

            
            const status = document.createElement('p');
            status.textContent = `Status: ${character.status}`;

            
            const origin = document.createElement('p');
            origin.textContent = `Origin: ${character.origin.name}`;

           
            characterDiv.appendChild(img);
            characterDiv.appendChild(h2);
            characterDiv.appendChild(status);
            characterDiv.appendChild(origin);

            
            gallery.appendChild(characterDiv);
        });
    })