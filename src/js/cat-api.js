import axios from 'axios';

const BASE_URL = 'https://api.thecatapi.com/v1';
const KEY = 'live_HEs7npt4enTv8IppoFAzotzjElNW9aw61wQB5T2Fw18DPSakhIju9elgFzOgYqmc';

// Функція, що фетчить список усіх порід котів
const fetchBreeds = () => {
  return axios.get(`${BASE_URL}/breeds?api_key=${KEY}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw new Error(error);
    });
};

// Функція, що фетчить опис конкретної породи кота по breedId
const fetchCatByBreed = breedId => {
  return axios.get(`${BASE_URL}/images/${breedId}?api_key=${KEY}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw new Error(error);
    });
};

// Іменований експорт функцій
export { fetchBreeds, fetchCatByBreed };