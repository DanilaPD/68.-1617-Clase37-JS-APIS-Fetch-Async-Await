//? https://openweathermap.org/api
//? https://openweathermap.org/current
//? Códigos Status: https://developer.mozilla.org/es/docs/Web/HTTP/Status

const container = document.getElementById("container");
const searchCity = document.getElementById("searchCity");
const searchInput = document.getElementById("searchInput");
const currentTemp = document.getElementById("currentTemp");
const icon = document.getElementById("icon");
const iconDesc = document.getElementById("iconDesc");
const ciudad = document.getElementById("ciudad");
const min = document.getElementById("min");
const max = document.getElementById("max");

//* const city = "rosario";
// Harcodeada/Forma fea de poner una ciudad por default.

// Función para mostrar los datos:
const displayInfo = (data) => {
    //* console.log(data);
    currentTemp.innerHTML = data.main.temp;
    ciudad.innerHTML = data.name;
    icon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    iconDesc.innerHTML = data.weather[0].description;
    min.innerHTML = data.main.temp_min;
    max.innerHTML = data.main.temp_max;
};

const getCityWeather = async (city) => {
    const APIkey = "4b70b1d2bf3fa89012562477c5921555";

    // Creen su propia APIKey:
    //* Lo único obligatorio es que pongamos un "término de búsqueda" y una "APIKey".
    const api = `
    https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=es&appid=${APIkey}`;

    const response = await fetch(api); // Lo que nos va a traer en esta línea se llama "response".
    const data = await response.json(); // Acá van a estar los datos legibles.

    //* console.log(response);
    //* console.log(data);

    // Le pasamos los datos a la función de arriba:
    displayInfo(data);
};

//* getCityWeather(city);

// Buscador:
searchCity.addEventListener("submit", (e) => {
    //* console.log(e);

    e.preventDefault() // El "default" de este evento ("submit") es recargar la página.

    //* console.log(searchInput.value);
    getCityWeather(searchInput.value);
});

// Forma ideal de pasar una ciudad por default:
window.onload = () => {
    // Cuando termina de cargar la ventana, es decir, el objeto "window", hace lo que dice dentro de la función.
    getCityWeather("San Juan");
};