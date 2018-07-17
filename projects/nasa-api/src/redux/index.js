import { createStore, applyMiddleware } from 'redux'
import axios from 'axios'
import thunk from 'redux-thunk'

const initialState = {
    stars: []
}

// Action Creators => Send Action Objects:
export const getStars = (id) => {
    return dispatch => {
        axios.get("https://images-api.nasa.gov/search?nasa_id=" + id)
            .then(response => {
                dispatch({
                    type: "GET_STARS",
                    stars: response.data.collection.items
                })
            })
    }
}

// Reducer:
const starReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case "GET_STARS":
            return {
                stars: action.stars
            }
        default:
            return prevState
    }
}

const store = createStore(starReducer, applyMiddleware(thunk))

store.subscribe(() => console.log(store.getState()))

export default store
// https://images-api.nasa.gov/search?q=stars