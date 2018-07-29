//reducer for query response processing
import { FETCH_CITIES, FETCH_ERROR } from "../actions/index";

export default function (state = { cities: [] }, action) {
  switch (action.type) {
    case FETCH_CITIES:
    console.log(action.payload);
      return {
        ...state,
        cities: action.payload.data
      };
    case FETCH_ERROR:
    console.log('response error');
    return {
       ...state,
        error: action.payload
      };
  }
  return state;
}
