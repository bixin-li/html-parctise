var possibleDos = [
  "吃饭，睡觉，打豆豆",
  "出门戴口罩",
  "躺在沙发上吃蚕豆",
  "吃五仁月饼",
  "吃榴莲月饼",
  "看恐怖片",
  "吃葡萄不吐葡萄皮",
  "打扫房间",
  "洗澡时唱洗刷刷"];
var possibleDonts = [
  "吃饭，睡觉，打豆豆",
  "吃五仁月饼",
  "吃榴莲月饼",
  "看恐怖片",
  "不吃葡萄倒吐葡萄皮",
  "打扫房间",
  "洗澡时唱洗刷刷",
  "减肥",
  "坐马桶刷手机",
  "相信黄历",
  "想买莲蓉月饼却错买成榴莲月饼"];

var theDate = localStorage.getItem("theDate").match(/\d/g);
var theYear = Number(theDate.slice(0,4).join(""));
var theMonth = Number(theDate.slice(4,6).join(""));
var theDay = Number(theDate.slice(6,8).join(""));
var animalSign = localStorage.getItem("animalSign");
var zodiacSign = localStorage.getItem("zodiacSign");

var theNumber = (theYear-2000)*365 + theMonth*30+ theDay;

var seed1 = ((theNumber + zodiacSign) / (animalSign / 13))%10;
var seed2 = ((theNumber + animalSign) / (zodiacSign / 13))%10;

while(seed1>1){
  seed1 /= 10;
}

while(seed2>1){
  seed2 /= 10;
}

var number1 = Math.floor(seed1*possibleDos.length);
var number2 = Math.floor(seed2*possibleDonts.length);

while(possibleDonts[number2] == possibleDos[number1]){
  number2 ++;
}

document.querySelector("#do").innerHTML = "宜：" + possibleDos[number1];
document.querySelector("#dont").innerHTML = "不宜：" + possibleDonts[number2];

localStorage.removeItem("theDate");
localStorage.removeItem("animalSign");
localStorage.removeItem("zodiacSign");
