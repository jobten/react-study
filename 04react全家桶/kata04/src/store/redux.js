export function createStore(reducer, enhancer) {
    if (enhancer) {
        return enhancer(createStore)(reducer)
    }

    let currentState
    let currentListeners = []

    function getState() {
        return currentState
    }

    function subscribe(listener) {
        currentListeners.push(listener)
    }

    function dispatch(action) {
        currentState = reducer(currentState, action)
        currentListeners.forEach(v => v())
        return action
    }
    dispatch({ Type: '@MYREDUX_TEST'})
    return { getState, subscribe, dispatch }
}