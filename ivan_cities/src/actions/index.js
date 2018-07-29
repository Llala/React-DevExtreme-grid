import axios from "axios";


const ROOT_URL = 'http://dev.freework.experium.ru:8181/Support/v1/freework/towns?URLEnc_search=';

export const FETCH_CITIES = "FETCH_CITIES";
export const FETCH_ERROR = "FETCH_ERROR";

export function fetchCities(city) {
  const url = `${ROOT_URL}+${city}`;
  return function(dispatch) {
    axios.get(url)
      .then(response => {
          dispatch({
             type: FETCH_CITIES,
             payload: response });
      })
      .catch(response => dispatch({type: FETCH_ERROR})
     );
  }
}

export function authError(error) {
  return {
    type: FETCH_ERROR,
    payload: error
  };
}
