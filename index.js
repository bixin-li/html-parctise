function submitInfo(){
  localStorage.removeItem("theDate");
  localStorage.removeItem("animalSign");
  localStorage.removeItem("zodiacSign");

  var theDate = document.querySelector('input[type="date"]').value;
  var animalSign = document.getElementById("animal").value;
  var zodiacSign = document.getElementById("zodiac").value;

  localStorage.setItem("theDate", theDate);
  localStorage.setItem("animalSign", animalSign);
  localStorage.setItem("zodiacSign", zodiacSign);

  if(theDate == ""){
    alert("请输入日期");
  }else{
    window.location.href = "fortureTelling.html";
  }
}
