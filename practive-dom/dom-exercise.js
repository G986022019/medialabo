//// 注意: 以下は編集しないこと!
let data = [
	{name:'札幌', lat:43.06417, lng:141.34694},
	{name:'仙台', lat:38.26889, lng:140.87194},
	{name:'新宿', lat:35.68944, lng:139.69167},
	{name:'名古屋', lat:35.18028, lng:136.90667},
	{name:'大阪', lat:34.68639, lng:135.52},
	{name:'広島', lat:34.39639, lng:132.45944},
	{name:'高知', lat:33.55972, lng:133.53111},
	{name:'福岡', lat:33.60639, lng:130.41806},
	{name:'鹿児島', lat:31.56028, lng:130.55806},
	{name:'沖縄', lat:26.2125, lng:127.68111}
];
//// 注意: 以上は編集しないこと!

// 練習4-2 メッセージ追加プログラム
let s=document.querySelector('h2#ex42');
let x=document.createElement('p');
x.textContent='写真表と都市の緯度経度のページです';
s.insertAdjacentElement('afterend',x);
x.style.textEmphasis='sesame green';

// 練習4-3 写真表作成プログラム

let p1=document.createElement('p');
let i=document.createElement('img');
i.setAttribute('src','taro.png');
p1.insertAdjacentElement('beforeend',i);

let p2=document.createElement('p');
let ii=document.createElement('img');
ii.setAttribute('src','jiro.png');
p2.insertAdjacentElement('beforeend',ii);

let p3=document.createElement('p');
let iii=document.createElement('img');
iii.setAttribute('src','hanako.png');
p3.insertAdjacentElement('beforeend',iii);

let b=document.querySelector('div#phototable');
b.insertAdjacentElement('beforeend',p1);
p1.insertAdjacentElement('afterend',p2);
p2.insertAdjacentElement('afterend',p3);
// 練習4-4 箇条書き削除プログラム
let r=document.querySelectorAll('ul#location>li');
for(let m of r){
	m.remove();
}

// 練習4-5 箇条書き追加プログラム
for(let d of data){
	let u=document.querySelector('ul#location');
	let l=document.createElement('li');
	l.textContent=d.name+' ... 緯度'+d.lat+', 経度'+d.lng;
	u.insertAdjacentElement('afterbegin',l);
}
