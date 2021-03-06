const cityForm = document.querySelector('form');
const card = document.querySelector('.card.current-time');
const card2 = document.querySelector('.card.past-time');
const details = document.querySelector('.details');
const details2 = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');


const updateUI = (data) => {
  console.log(data);
  // destructure properties
  const {
    cityDetails,
    weather
  } = data;

  // update details template
  details.innerHTML = `
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weather.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>
  `;

  // update the night/day icon images
  const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute('src', iconSrc);

  let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';

  time.setAttribute('src', timeSrc);

  // remove the d-none class if present
  if (card.classList.contains('d-none')) {
    card.classList.remove('d-none');
  }

}

const updateCity = async (city) => {

  const cityDetails = await getCity(city);
  const weather = await getWeather(cityDetails.Key);

  return {
    cityDetails,
    weather
  };

};

const updatePastCity = async (city) => {
  const cityDetails = await getCity(city);
  const pastWeather = await getPastWeather(cityDetails.Key);

  return {
    cityDetails,
    pastWeather
  };

};

cityForm.addEventListener('submit', event => {
  // prevent default action
  event.preventDefault();

  // get city value
  const city = cityForm.city.value.trim();
  cityForm.reset();

  updateCity(city)
    .then(data => updateUI(data))
    .catch(error => console.log(error));

});

//updatePastCity('manchester').then(data => console.log(data))
//  .catch(error => console.log(error));







