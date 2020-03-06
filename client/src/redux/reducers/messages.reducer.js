export default (state = {data: null, error: null}, action) => {
    switch (action.type) {
        case 'SET_MESSAGES_SUCCESS':
            return {data: action.messages};
        case 'SET_MESSAGES_FAILED':
            return {error: action.error};
        case 'SET_USER_ONLINE':
            let newState = state;
            newState.data.forEach(e => {
                if(e.id === action.id) {
                    e.countOnline++;
                }
            })
            return {...newState};
        case 'SET_USER_OFLINE':
            newState = state;
            newState.data.forEach(e => {
                if(e.id === action.id) {
                    e.countOnline--;
                }
            })
            return {...newState};
        default:
            return state;
    }
};