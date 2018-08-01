// import { createStore, applyMiddleware } from  'redux'
// import axios from 'axios'
// import thunk from 'redux-thunk'

// const initialState = {
//     courses: []
// }

// // Action Creators => Send Action Objects:
// export const getCourses = () => {
//     return dispatch => {
//         axios.get("http://localhost:9997/courses/")
//         .then(response => {
//             dispatch({
//                 type: "GET_COURSES",
//                 courses: response.data.collection.items
//             })
//         })
//     }
// }

// // Reducer:
// const courseReducer = (prevState = initialState, action) => {
//     switch (action.type) {
//         case "GET_COURSES":
//         return { 
//             courses: action.courses
//         }
//         default: 
//         return prevState
//     }
// } 


// const store = createStore(  courseReducer, applyMiddleware(thunk))
// store.subscribe(() => console.log(store.getState()))
// export default store