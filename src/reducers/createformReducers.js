import { CREATE_FORM } from '../constants/actionTypes';

export default function todos(state = [], a) {
  switch (a.type) {
    case CREATE_FORM:
      // const a = action.payload.map(todo => ({
      //   text: todo.answer || todo.text,
      //   done: todo.done === '1',
      //   id: todo.id,
      //   isItemExists: false,
      // }))
      console.log("CREATEFOFRMMM")
      return [...state, ...a]

    default:
      return state
  }
}