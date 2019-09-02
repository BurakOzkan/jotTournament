import axios from "axios";

// import { CREATE_FORM } from "../constants/actionTypes";
const API_KEY = "ade9c792cc4b870cbac321b22d6a89ee";
const FORM_ID = "92181413902956";
const FETCH_SUBMISSIONS = "https://api.jotform.com/form";

const fetchLastSubmission = async () => {
  //Burayı düzelttim çalıştı
  const url = `${FETCH_SUBMISSIONS}/${FORM_ID}/submissions?apikey=${API_KEY}`;
  const { data } = await axios.get(url);
  return data.content[0].answers;
};
const fetchAllForms = async () => {
  //Burayı düzelttim çalıştı
  const url = `https://api.jotform.com/user/forms?apikey=${API_KEY}&limit=50&orderby=id`;
  const { data: { content } } = await axios.get(url);
  console.log(content);
  const tf = content.reduce((tournamentForms, { title, id }) => {
    if (title.includes('__tournamentForm__')) {
      return [...tournamentForms, { title, id }];
    }
    return tournamentForms;
  }, []);
  return tf;
};


const fetchExpireDate = async (formID) => {
  const url = `https://api.jotform.com/form/${formID}/properties?apiKey=${API_KEY}&limit=50&orderby=id`;

  const { data: { content } } = await axios.get(url);
  return content.expireDate;
  
};

const fetchTournamentSubmissions = async formId => {
  const teams= [];
  const url = `${FETCH_SUBMISSIONS}/${formId}/submissions?apikey=${API_KEY}`;
  const { data: { content } } = await axios.get(url);
  console.log(content);
  content.forEach(function(element) {
    console.log(element.answers[6].answer);
    teams.push(element.answers[6].answer);
  });
  console.log(teams);
  return teams;
};

export { fetchLastSubmission, fetchAllForms , fetchExpireDate ,fetchTournamentSubmissions };

/*const fetchImageStats = async id => {
    const response = await fetch(`${URL}/${id}/statistics${KEY}`);
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
};*/
