// reducer.js
const initialState = JSON.parse(localStorage.getItem("todos")) || [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODOS":
      return [...state, action.payload];
    case "REMOVE_TODOS":
      return state.filter((item) => item.id !== action.payload);
    case "UPDATE_TODOS":
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            item: action.payload.item,
          };
        }
        return todo;
      });
    case "COMPLETE_TODOS":
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: true,
          };
        }
        return todo;
      });

    case "INITIALIZE_TODOS":
      return action.payload;

    default:
      return state;
  }
};

export default todoReducer;
