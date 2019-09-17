export const counterReducer = (state = 0, action) => {
    const num = action.payload || 1;
    switch(action.type) {
        case 'add':
            return state + num
        case 'minus':
            return state - num
        default:
            return state 
    }
}
export const add = num => ({ type: 'add', payload: num })
export const minus = num => ({ type: 'minus', payload: num })
export const asyncAdd = num => dispatch => {   
    setTimeout(() =>{
        dispatch({type: 'add'})
    }, 1000)
}