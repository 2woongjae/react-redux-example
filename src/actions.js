export const ADD_TODO = "ADD_TODO";

export const addTodo = text => ({
  type: ADD_TODO,
  text,
  createdAt: new Date().toISOString()
});

export const COMPLETE_TODO = "COMPLETE_TODO";

export const completeTodo = index => ({
  type: COMPLETE_TODO,
  index
});

export const START_LOADING = "START_LOADING";

const startLoading = () => ({ type: START_LOADING });
