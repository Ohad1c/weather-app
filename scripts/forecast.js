const key = 'knxkKAkcMec32WcKgR0wvRyURHlB51Eo';

// get weather information
const getWeather = async (id) => {

  const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
  const query = `${id}?apikey=${key}`;

  const response = await fetch(base + query);
  const data = await response.json();
  return data[0];

};

// get city information
const getCity = async (city) => {

  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(base + query);
  const data = await response.json();
  return data[0];

};

// get weather information
const getPastWeather = async (id) => {

  const baseStart = 'http://dataservice.accuweather.com/currentconditions/v1/';
  const query = `${id}/historical/24?apikey=${key}`;
//  const baseEnd = '/historical/24';

  const response = await fetch(baseStart + query);
  const data = await response.json();
  return data[23];

};


//getPastWeather('329260').then(data => {
//  console.log(data);
//
//}).catch(error => console.log(error));




















