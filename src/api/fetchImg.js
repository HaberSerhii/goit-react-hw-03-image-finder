import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '40061202-e8c04074179e2acf66f02bba8';

export const getImage = async (searchValue, shownPage) => {
  const option = {
    headers: {
      'Content-type': 'application/json',
    },
    params: {
      key: API_KEY,
      q: `${searchValue}`,
      image_type: 'photo',
      photo: 'horizontal',
      safesearch: 'true',
      page: `${shownPage}`,
      per_page: 12,
    },
  };
  const { data } = await axios(BASE_URL, option);
  return data;
};
