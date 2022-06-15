import OpenWeatherMap from 'openweathermap-ts';

const openWeather = new OpenWeatherMap({
    apiKey: 'c1603c414b3b7d95c563e17d2efdc7df',
    units: 'standard'
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