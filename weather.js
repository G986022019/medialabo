let b=document.querySelector('button#btn');
b.addEventListener('click',search);

function search(){
  overlay.style.display='block';
  let s=document.querySelector('select#toshi');
  let idx=s.options[s.selectedIndex];
  let id=idx.id;
  console.log('検索キーは:'+id);
  document.addEventListener('keydown',handleKeydown);

  let url='https://www.nishita-lab.org/web-contents/jsons/openweather/'+id+'.json';
  axios.get(url).then(showResult).catch(showError).then(finish);
}

function handleKeydown(){
  overlay.style.display='none';
  document.removeEventListener('keydown',handleKeydown);
  let rem=document.querySelectorAll('p');
  rem.forEach(rem=>rem.remove());
}

function showResult(resp){
  let data=resp.data;

  let ol=document.querySelector('img#weather');
  weather=data.weather[0].description;
  switch(weather){
    case "晴天":
      ol.src="https://cdn.midjourney.com/4604ebfe-b287-4775-b170-9a9d5b16d6fb/0_3.png";
      break;
    case "厚い雲":
      ol.src="https://cdn.midjourney.com/6a536c24-4a09-4574-acde-a41de0846248/0_2.png";
      break;
    case "雲":
      ol.src="https://cdn.midjourney.com/3c389387-b74d-479b-832f-4c169bfe0900/0_2.png";
      break;
    case "曇りがち":
      ol.src="https://cdn.midjourney.com/e4240088-c25b-4435-8042-581c7b0b6460/0_0.png";
      break;
    case "小雨":
      ol.src="https://cdn.midjourney.com/3c321b55-4786-4d61-9fae-b005564b54ed/0_2.png";
      break;
    case "霧":
      ol.src="https://cdn.midjourney.com/92710c27-33fc-457f-a82e-54d00c2f8d24/0_2.png";
      break;
    default:
      weather.style.backgroundColor = "#FFFFFF" ;
  }

  let di=document.querySelector('div#result');

  let p1=document.querySelector('div#city');
  p1.textContent=data.name;
  di.insertAdjacentElement('beforeend',p1);

  let p2=document.querySelector('div#weather');
  p2.textContent=data.weather[0].description;
  di.insertAdjacentElement('beforeend',p2);

  let p3=document.querySelector('div#temp');
  p3.textContent='最高気温:'+data.main.temp_max+'  '+'最低気温:'+data.main.temp_min;
  di.insertAdjacentElement('beforeend',p3);

  let more=document.querySelector('div#more');

  let windspeed=document.querySelector('input#windspeed');
  if(windspeed.checked){
    let p6=document.createElement('p');
    p6.textContent='風速:          '+data.wind.speed;
    more.insertAdjacentElement('beforeend',p6);
  }

  let winddeg=document.querySelector('input#winddeg');
  if(winddeg.checked){
    let p7=document.createElement('p');
    p7.textContent='風向:          '+data.wind.deg;
    more.insertAdjacentElement('beforeend',p7);
  }

  let humidity=document.querySelector('input#humidity');
  if(humidity.checked){
    let p5=document.createElement('p');
    p5.textContent='湿度:          '+data.main.humidity;
    more.insertAdjacentElement('beforeend',p5);
  }

  let more1=document.querySelector('div#more1');

  let lon=document.querySelector('input#lon');
  if(lon.checked){
    let p8=document.createElement('p');
    p8.textContent='緯度:               '+data.coord.lon;
    more1.insertAdjacentElement('beforeend',p8);
  }

  let lat=document.querySelector('input#lat');
  if(lat.checked){
    let p9=document.createElement('p');
    p9.textContent='経度:               '+data.coord.lat;
    more1.insertAdjacentElement('beforeend',p9);
  }
}

function showError(err){
  console.log(err);
}
function finish(){
  console.log('Ajax 通信が終わりました');
}