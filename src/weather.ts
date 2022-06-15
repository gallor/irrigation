import OpenWeatherMap from 'openweathermap-ts';

const openWeather = new OpenWeatherMap({
    apiKey: 'c1603c414b3b7d95c563e17d2efdc7df',
    units: 'imperial'
});

async function getWeather(): Promise<void> {
    try {
        const weather = await openWeather.getThreeHourForecastByCityName({
            cityName: 'Wheaton',
            countryCode: 'US',
            state: 'IL'
        });
        console.log(JSON.stringify(weather, null, 2));
    } catch(e) {}

}
getWeather();
// class Weather:
//     def __init__(self) -> None:
//         self.apiKey = ''
//         self.latLon = self.get_lat_lon()

//     def get_data(self, api, parameters):
//         response = requests.get(f"{api}", parameters)
//         if response.status_code == 200:
//             jsonResponse = response.json()
//             return jsonResponse
//         else:
//             print(f"there's a {response.status_code} error with your request")

//     def get_lat_lon(self):
//         api = 'http://api.openweathermap.org/geo/1.0/zip'
//         parameters = {
//             'appId': self.apiKey,
//             'zip': '60187,US'
//         }
//         geocode = self.get_data(api, parameters)
//         return {
//             'lat': geocode["lat"],
//             'lon': geocode["lon"]
//         }

//     def get_forecast(self):
//         api = 'http://api.openweathermap.org/data/2.5/forecast'
//         parameters = {
//             'appId': self.apiKey,
//             'lat': self.latLon['lat'],
//             'lon': self.latLon['lon']
//         }
//         forecast = self.get_data(api, parameters)

// if __name__ == "__main":
//     api = Weather()