'use strict';


//APIのコールを関数化
const REQUEST_AJAX = async (city_id) => {

    const URL = `http://api.openweathermap.org/data/2.5/weather?id=${city_id}&appid=4b5774e9f3d2a07b84f0f2f88e486224&lang=ja&units=metric`;
    const JSON = await fetch(URL)
        .then(res => {
            return res.json();
        }).catch(error => {
            console.log('APIへのアクセスに失敗しました');
            return null;
        });
    const WEATHER = JSON.weather[0].description;
    const WEATHER_DESCRIPTION = document.getElementById('weather_description');
    WEATHER_DESCRIPTION.textContent = `現在の天気は${WEATHER}です`;
}


//プルダウンから選んだ年の天気を表示する
const SELECT_CITY = document.querySelector('.city');
SELECT_CITY.addEventListener('change', (event) => {
    const GET_WEATHER = async () => {

        const URL = `http://api.openweathermap.org/data/2.5/weather?id=${event.target.value}&appid=4b5774e9f3d2a07b84f0f2f88e486224&lang=ja&units=metric`;

        const JSON = await fetch(URL)
            .then(res => {
                return res.json();
            }).catch(error => {
                console.log('APIへのアクセスに失敗しました');
                return null;
            });
        const WEATHER = JSON.weather[0].description;
        const WEATHER_DESCRIPTION = document.getElementById('weather_description');
        WEATHER_DESCRIPTION.textContent = `現在の天気は${WEATHER}です`;
    }
    GET_WEATHER();
});

//デフォルトでロンドンの天気を表示する
const GET_LONDON_WEATHER = async () => {

    const URL_OF_LONDON = 'http://api.openweathermap.org/data/2.5/weather?id=2643743&appid=4b5774e9f3d2a07b84f0f2f88e486224&lang=ja&units=metric'

    const JSON_OF_LONDON = await fetch(URL_OF_LONDON)
        .then(res => {
            return res.json();
        }).catch(error => {
            console.log('APIへのアクセスに失敗しました');
            return null;
        });

    const weather = JSON_OF_LONDON.weather[0].description;
    const LONDON_WEATHER = document.getElementById('weather_description');
    LONDON_WEATHER.textContent = `現在の天気は${weather}です`;
}
GET_LONDON_WEATHER();
