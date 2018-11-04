const periodFilter = (state = new Date().toISOString().slice(0, 10), action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter
        default:
            return state
    }
}

export default periodFilter