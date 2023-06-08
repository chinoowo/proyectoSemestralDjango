let lon;
let lat;
let temperature = document.querySelector(".temp");
let summary = document.querySelector(".summary");
let loc = document.querySelector(".location");
let icon = document.querySelector(".icon");
const kelvin = 273.5;





window.addEventListener("load", () => {


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {

            console.log(position);
            lon = position.coords.longitude;
            lat = position.coords.latitude;


            /*ID API */

            const appid = `9a79fcf82658278c51469ec8131bf03b`


            const url_base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}`


            fetch(url_base)
                .then((response) => {

                    console.log("respuesta json");
                    return response.json();

                })

                .then((data) => {


                    console.log("Esta es la data");
                    console.log(data);

                    temperature.textContent =
                        Math.floor(data.main.temp - kelvin) + "°C";
                    /* summary.textContent = data.weather[0].description; */
                    loc.textContent = data.name + "," + data.sys.country;



                });


        }


        )
    }

});

