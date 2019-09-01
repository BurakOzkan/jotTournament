import { CREATE_FORM } from '../constants/actionTypes';

export default function todos(state = [], a) {
  switch (a.type) {
    case CREATE_FORM:

      console.log("CREATEFOFRMMM")
      return [...state, ...a]

    default:
      return state
  }
}