let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};
kensaku();
////////// 課題3-2 ここからプログラムを書こう
function kensaku(){
  console.log(data.coord.lon);
  console.log(data.coord.lat);
  //console.log(data.weather[0]);
  console.log(data.weather[0].id);
  console.log(data.weather[0].main);
  console.log(data.weather[0].description);
  console.log(data.weather[0].icon);

  console.log(data.base);

  console.log(data.main.temp);
  console.log(data.main.feels_like);
  console.log(data.main.temp_min);
  console.log(data.main.temp_max);
  console.log(data.main.pressure);
  console.log(data.main.humidity);
  console.log(data.main.sea_level);
  console.log(data.main.grnd_level);

  console.log(data.visibility);

  console.log(data.wind.speed);
  console.log(data.wind.deg);
  console.log(data.wind.gust);

  console.log(data.clouds.all);

  console.log(data.dt);

  console.log(data.sys.type);
  console.log(data.sys.id);
  console.log(data.sys.country);
  console.log(data.sys.sunrise);
  console.log(data.sys.sunset);

  console.log(data.timezone);

  console.log(data.id);

  console.log(data.name);
  
  console.log(data.cod);
}