import axios from 'axios'

import { CREATE_FORM } from '../constants/actionTypes';
const API_KEY = 'ade9c792cc4b870cbac321b22d6a89ee'
const FORM_ID = '92181413902956'
const FETCH_SUBMISSIONS = 'https://api.jotform.com/form'



export  const fetchLastSubmission = async () => { //Burayı düzelttim çalıştı
  const url = `${FETCH_SUBMISSIONS}/${FORM_ID}/submissions?apikey=${API_KEY}`
  const { data } = await axios.get(url)
  return data.content[0].answers;
}


/*const fetchImageStats = async id => {
    const response = await fetch(`${URL}/${id}/statistics${KEY}`);
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
};*/



// export { fetchImages, fetchImageStats };
