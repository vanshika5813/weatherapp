function getWeather() {
    var cityName = document.getElementById("city").value;

    var apiKey="ae231195e64bf240f67c4dfa4c1507dc";

    var url = "https://api.openweathermap.org/data/2.5/weather?q=" 
              + cityName + "&units=metric&appid=" + apiKey;

    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var temperature = data.main.temp;

            document.getElementById("result").innerHTML =
                "Temperature in " + cityName + " is " + temperature + "°C";
        })
        .catch(function(error) {
            document.getElementById("result").innerHTML =
                "Error fetching data!";
        });
}
