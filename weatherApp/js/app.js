const btn = document.getElementById('changeLocation');
const closeIcon = document.getElementById('close');
const modalBg = document.querySelector('.modal-bg')
btn.addEventListener('click', visible);
closeIcon.addEventListener('click', close);
const storage = new Storage();
//get stored localation
const weatherLocation = storage.getLocationData();
const weather = new WeatherApi(weatherLocation.city);
// funtions 

function visible() {
  modalBg.classList.add('bg-active');
}

function close() {
  modalBg.classList.remove('bg-active');
}
// const weather = new WeatherApi('chandigarh');
const ui = new UI();
//get weather on dom load
document, addEventListener('DOMContentLoaded', getWeather)
//init weather obj
function getWeather() {

  weather.getWeather()
    .then(res => {
      ui.paint(res);
    })
    .catch(err => alert(err))
}
//save
document.getElementById('save').addEventListener('click', () => {
  const city = document.getElementById('something').value;
  console.log(city);
  weather.changelocation(city);
  storage.setLocalStorage(city);
  //call get  weather
  getWeather();
  close();

})