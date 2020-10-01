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

var randomNumber1 = Math.floor(Math.random()*possibleDos.length);
var randomNumber2 = Math.floor(Math.random()*possibleDonts.length);

while(possibleDonts[randomNumber2] == possibleDos[randomNumber1]){
  randomNumber2 = Math.floor(Math.random()*possibleDonts.length);
}

document.querySelector("#do").innerHTML = "宜：" + possibleDos[randomNumber1];
document.querySelector("#dont").innerHTML = "不宜：" + possibleDonts[randomNumber2];
