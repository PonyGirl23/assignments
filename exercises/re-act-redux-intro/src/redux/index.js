import { createStore } from 'redux'

export const addOne = () => {
    return {
        type: 'ADD_ONE'
    }
}

export const subOne = () => {
    return {
        type: 'SUB_ONE'
    }
}

export const timesByTwo = () => {
    return {
        type: 'TIMES_BY_TWO'
    }
}

export const changeNum = () => {
    return {
        type: 'CHANGE_NUM',
        num
    }
}

const reducer = (state = { num: 0 }, action) => {
    switch (action.type) {
        case 'ADD_ONE':
            return {
                num: state.num + 1
            }
        case 'SUB_ONE':
            return {
                num: state.num - 1
            }
        case 'TIMES_BY_TWO':
            return {
                num: state.num * 2
            }
        default:
            return state
    }
}
export default createStore(reducer)