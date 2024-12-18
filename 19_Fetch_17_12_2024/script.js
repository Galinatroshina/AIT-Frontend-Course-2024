// fetch('https://fakestoreapi.com/products')
// .then(res=>res.json())
// .then(data => {
//     data.map(product =>{
//         const item = document.createElement('p')
//         item.textContent = product.title
//         document.body.append(item)
//     })
// });

// ! async запрос на async / await
const gridProducts = document.querySelector("#grid-products");
async function fetchProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  data.map((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.classList.add("primary");

    const heading = document.createElement("h4");
    heading.textContent = product.title;

    //добавляем элементы к карточке
    //создаем картинку
    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.title;

    //создаем обертку для картинки
    const wrapper = document.createElement("img");
    wrapper.className = "img-wrapper";
    wrapper.append(img);

    const desc = document.createElement("p");

    // обрезаем длинный текст (опционально)
    let descText = product.description;
    if (descText.length > 200) {
      desc.textContent = descText.slice(0, 200) + "...";
    } else {
      desc.textContent = product.description;
    }

    // desc.textContent = product.description;

    const price = document.createElement("p");
    price.textContent = `Price: ${product.price} Euro`;

    //добавляем элементы к карточке
    card.append(heading, img, desc, price, wrapper);
    console.log(card);
    gridProducts.append(card);
  });
}

//вызов функции
fetchProducts();

// fetch('https://fakestoreapi.com/products?limit=5')
// .then(res => res.json())
// .then(data => {
//     console.log(data)
// })

async function getAsyncProducts() {
    const res = await fetch('https://fakestoreapi.com/products?limit=5')
    const data = await res.json();
    console.log(data)
}
getAsyncProducts()