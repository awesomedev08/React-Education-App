// import {
//   ADD_TODO,
//   TOGGLE_TODO,
//   SET_VISIBILITY_FILTER,
//   VisibilityFilters
// } from './actions'
// ​
//
// ​
// function todoApp(state = initialState, action) {
//   switch (action.type) {
//     case SET_VISIBILITY_FILTER:
//       return Object.assign({}, state, {
//         visibilityFilter: action.filter
//       })
//     case ADD_TODO:
//       return Object.assign({}, state, {
//         todos: [
//           ...state.todos,
//           {
//             text: action.text,
//             completed: false
//           }
//         ]
//       })
//     default:
//       return state
//   }
// }
