//? https://openweathermap.org/api
//? https://openweathermap.org/current

const city = "rosario";

const getCityWeather = async (city) => {
    const APIkey = "4b70b1d2bf3fa89012562477c5921555";

    // Creen su propia APIKey:
    //* Lo único obligatorio es que pongamos un "término de búsqueda" y una "APIKey".
    const api = `
    https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=es&appid=${APIkey}`;

    const response = await fetch(api);
    const data = await response.json();

    console.log(response);
    console.log(data);
}

getCityWeather(city);