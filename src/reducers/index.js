import { todos } from "./todos";
import { loading } from "./loading";

import { combineReducers } from "redux";

// export const reducer = (state = {}, action) => ({
//   todos: todos(state.todos, action),
//   loading: loading(state.loading, action)
// });

export const reducer = combineReducers({
  todos,
  loading
});
