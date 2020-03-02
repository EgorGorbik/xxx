export default (state = {data: null, error: null}, action) => {
    switch (action.type) {
        case 'SET_USER_SUCCESS':
            return {data: action.user};
        case 'SET_USER_FAILED':
            return {error: action.error};
        default:
            return state;
    }
};