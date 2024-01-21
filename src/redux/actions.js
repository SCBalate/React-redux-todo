// actions.js

// Action Types
export const ADD_TODOS = "ADD_TODOS";
export const REMOVE_TODOS = "REMOVE_TODOS";
export const UPDATE_TODOS = "UPDATE_TODOS";
export const COMPLETE_TODOS = "COMPLETE_TODOS";

// Action Creators
export const addTodos = (obj) => {
  return {
    type: ADD_TODOS,
    payload: obj,
  };
};

export const removeTodos = (id) => {
  return {
    type: REMOVE_TODOS,
    payload: id,
  };
};

export const updateTodos = (obj) => {
  return {
    type: UPDATE_TODOS,
    payload: obj,
  };
};

export const completeTodos = (id) => {
  return {
    type: COMPLETE_TODOS,
    payload: id,
  };
};

export const initializeTodos = (todos) => {
  return {
    type: "INITIALIZE_TODOS",
    payload: todos,
  };
};
