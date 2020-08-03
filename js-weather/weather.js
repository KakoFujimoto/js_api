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

//プルダウンで選択肢を変更したことをトリガーに、選択された都市の天気を表示する
const SELECT_CITY = document.querySelector('.city');
SELECT_CITY.addEventListener('change', (event) => {

    const CHOSEN_CITY = event.target.value;
    REQUEST_AJAX(CHOSEN_CITY);

});

//デフォルトでロンドンの天気を表示する
const LONDON_ID = 2643743;
REQUEST_AJAX(LONDON_ID);
