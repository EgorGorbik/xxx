export default (state = {data: null, error: null}, action) => {
    switch (action.type) {
        case 'SET_MESSAGES_SUCCESS':
            return {data: action.messages};
        case 'SET_MESSAGES_FAILED':
            return {error: action.error};
        default:
            return state;
    }
};