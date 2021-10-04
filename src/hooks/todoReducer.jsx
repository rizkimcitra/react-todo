import { v4 as uuid } from 'uuid'

export const todosReducer = (state, action) => {
  const checkListTodo = id => {
    // first we match the todo with the id provided, this will return a single object
    const findTodo = state.find(todo => todo.id === id)
    // second we filtered out the state, and return the state id that's not same as the id parameters
    const filteredTodo = state.filter(todo => todo.id !== id)
    // set the singel object from findTodo, set the isCompleted value to true
    findTodo.isCompleted = !findTodo.isCompleted
    // last we returning it
    return [...filteredTodo, findTodo]
  }

  //   check all cases
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        {
          id: uuid(),
          content: action.todo.content,
          isCompleted: action.todo.isCompleted,
        },
      ]

    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id)

    case 'EDIT':
      return checkListTodo(action.id)

    default:
      return state
  }
}
