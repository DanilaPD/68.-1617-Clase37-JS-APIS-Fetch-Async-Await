//? Extensión de Chrome: https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa

//? Documentación - Fetch: https://developer.mozilla.org/es/docs/Web/API/Fetch_API

//? Fake API: https://jsonplaceholder.typicode.com/
//? Fake API - Guide: https://jsonplaceholder.typicode.com/guide/
//? Fake API - Posts: https://jsonplaceholder.typicode.com/posts

//? APIS para jugar y probar: https://pokeapi.co/
//? APIS para jugar y probar: https://www.edamam.com/
//? APIS para jugar y probar: https://openweathermap.org/current

const postContainer = document.getElementById("container");
//* const postTitle = document.getElementById("title");
//* const postComment = document.getElementById("comment");

// URL de la API:
let url = "https://jsonplaceholder.typicode.com/posts";

// Usamos el "fetch" para traer los datos:
fetch(url)
    // No es obligatorio que se llamen "res/response", "data", "err", pero es lo que solemos usar por convención.
    .then((response) => response.json())
    .then((data) => mostrarData(data))
    .catch((err) => console.log(err))

//! Esto mostraría solo un dato:
//* const mostrarData = data => {
//*     console.log(data);
//*     for(let i = 0; i < data.length; i++) {
//*         postTitle.innerHTML = data[i].title;
//*         postComment.innerHTML = data[i].body;
//*     }
//* }

const mostrarData = data => {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        const newId = document.createElement("p");
        newId.classList.add("newId");

        const newTitle = document.createElement("div");
        newTitle.classList.add("title");

        const newComment = document.createElement("div");
        newComment.classList.add("comment");

        const newContainer = document.createElement("div");
        newContainer.classList.add("container");

        // Vamos a crear un botoncito de borrar:
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("btn");
        deleteBtn.innerHTML = "borrar";

        newId.innerHTML = `#${
            data[i].id
        }`;
        newTitle.innerHTML = data[i].title;
        newComment.innerHTML = data[i].body;

        // "Appendeo" los hijos nuevos al container nuevo:
        newContainer.appendChild(newId);
        newContainer.appendChild(newTitle);
        newContainer.appendChild(newComment);
        newContainer.appendChild(deleteBtn);

        // "Appendeo" el container nuevo al container viejo:
        postContainer.appendChild(newContainer);

        deleteBtn.addEventListener("click", () => {
            postContainer.removeChild(newContainer);
            console.log(`delete ${data[i].id}`);
        })
    }
}