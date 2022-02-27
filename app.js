let input = document.querySelector('.input_text');
let main = document.querySelector('#name');
let temp = document.querySelector('.temp');
let tempMin = document.querySelector('.tempMin');
let tempMax = document.querySelector('.tempMax');
let desc = document.querySelector('.desc');
let button= document.querySelector('.submit');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=30aa49820936dd6facc7fce7c648289a&units=metric&lang=es')
.then(response => response.json())
.then(data => {
  let iconValue = data['weather'][0]['icon'];
  let tempValue = data['main']['temp'];
  let nameValue = data['name'];
  let tempMinValue = data['main']['temp_min'];
  let tempMaxValue = data['main']['temp_max'];
  let descValue = data['weather'][0]['description'];
  let icon = 'http://openweathermap.org/img/w/' + iconValue + '.png';
  console.log(data);
  console.log(data['main']['temp_max']);
  
  main.innerHTML = nameValue;
  desc.innerHTML = "Descripción: "+descValue;
  temp.innerHTML = "Temperatura: "+tempValue+" °C";
  tempMin.innerHTML = "Temperatura mínima: "+tempMinValue+" °C";
  tempMax.innerHTML = "Temperatura máxima: "+tempMaxValue+" °C";
  //input.value ="";

  //Eliminar el icono anterior
  var div = document.getElementById('icono1');
  while (div.firstChild) {
      div.removeChild(div.firstChild);
  } 
  
  //Insertar el icono
  const image = document.createElement("img");
  image.src = icon;
  image.width = 100;
  image.length = 100;
  document.querySelector('.icono').appendChild(image);
})
.catch(err => alert("Nombre incorrecto de ciudad!"));
})