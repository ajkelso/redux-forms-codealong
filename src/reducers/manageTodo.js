export default function manageTodo(state = {
  todos: [],
}, action) {

  switch (action.type) {
    case 'ADD_TODO':  
      console.log(state)
      return { todos: state.todos.concat(action.payload.text)}
    default:
      break;
  }

  console.log("reducer received this action:", action);

  return state;
}
