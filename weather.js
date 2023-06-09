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

  let di=document.querySelector('div#result');
  let p1=document.createElement('p');
  p1.textContent='緯度:'+data.coord.lon;
  di.insertAdjacentElement('beforeend',p1);

  let p2=document.createElement('p');
  p2.textContent='経度:'+data.coord.lat;
  p1.insertAdjacentElement('afterend',p2);

  let p3=document.createElement('p');
  p3.textContent='天気:'+data.weather[0].description;
  p2.insertAdjacentElement('afterend',p3);

  let p4=document.createElement('p');
  p4.textContent='最低気温:'+data.main.temp_min;
  p3.insertAdjacentElement('afterend',p4);

  let p5=document.createElement('p');
  p5.textContent='最高気温:'+data.main.temp_max;
  p4.insertAdjacentElement('afterend',p5);

  let p6=document.createElement('p');
  p6.textContent='湿度:'+data.main.humidity;
  p5.insertAdjacentElement('afterend',p6);

  let p7=document.createElement('p');
  p7.textContent='風速:'+data.wind.speed;
  p6.insertAdjacentElement('afterend',p7);

  let p8=document.createElement('p');
  p8.textContent='風向:'+data.wind.deg;
  p7.insertAdjacentElement('afterend',p8);

  let p9=document.createElement('p');
  p9.textContent='都市名:'+data.name;
  p8.insertAdjacentElement('afterend',p9);

 /* console.log('緯度:'+data.coord.lon);
  console.log('経度:'+data.coord.lat);
  //console.log(data.weather[0]);
  console.log(data.weather[0].id);
  console.log(data.weather[0].main);
  console.log('天気:'+data.weather[0].description);
  console.log(data.weather[0].icon);

  console.log(data.base);

  console.log(data.main.temp);
  console.log(data.main.feels_like);
  console.log('最低気温:'+data.main.temp_min);
  console.log('最高気温:'+data.main.temp_max);
  console.log(data.main.pressure);
  console.log('湿度:'+data.main.humidity);
  console.log(data.main.sea_level);
  console.log(data.main.grnd_level);

  console.log(data.visibility);

  console.log('風速:'+data.wind.speed);
  console.log('風向:'+data.wind.deg);
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

  console.log('都市名:'+data.name);
  
  console.log(data.cod);
*/
}